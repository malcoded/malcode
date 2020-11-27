import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import firebase from "gatsby-plugin-firebase"
import Layout from "../components/layout"
import Pagetitle from "../components/pagetitle"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import AuthorTitle from "../components/authorTitle"
import { Rating } from "../components/Rating"
import Modal from "./../components/Modal"
export default ({ pageContext, data }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next, excerpt, id } = pageContext
  const [visible, setVisibile] = useState(false)
  const [post, setPost] = useState(null)

  const handleOnClick = () => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) {
      const currentClap = post && post.claps ? post.claps : 0
      console.log("🚀 ~ file: blog-post.js ~ line 16 ~ id", id)
      firebase
        .firestore()
        .collection("posts")
        .doc(id)
        .update({
          claps: currentClap + 1,
        })
        .then(data => {
          console.log("🚀 ~ file: blog-post.js ~ line 32 ~ .then ~ data", data)
          getMovies(id)
        })
        .catch(error => {
          console.log("handleOnClick -> error", error)
        })
    } else {
      setVisibile(true)
    }
  }
  const authGoogleAcount = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
      setVisibile(false)
    } catch (error) {
      console.log("authGoogleAcount -> error", error)
    }
  }

  const handleOnCloseModal = () => {
    setVisibile(false)
  }
  const getMovies = async nId => {
    try {
      const db = firebase.firestore()
      const response = await db.collection("posts").doc(nId).get()
      const data = await response.data()
      setPost(data)
      console.log("🚀 ~ file: blog-post.js ~ line 58 ~ data", data)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    id && getMovies(id)
  }, [id])

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <Rating handleOnClick={handleOnClick} post={post} />
      <div className="gv-post-container">
        <Pagetitle title={frontmatter.title} className="gv-snippet-title" />
        <AuthorTitle />
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <nav className="gv-chapter-nav">
          {previous && (
            <div className="chapter-prev">
              <Link to={previous.fields.slug} rel="prev" className="gv-btn">
                <Emoji symbol="👈" className="gv-emoji-btn" />
                <span className="gv-truncate">
                  {previous.frontmatter.title}
                </span>
              </Link>
            </div>
          )}

          {next && (
            <div className="gv-chapter-next">
              <Link to={next.fields.slug} rel="next" className="gv-btn">
                <span className="gv-truncate">{next.frontmatter.title}</span>
                <Emoji symbol="👉" className="gv-emoji-btn" />
              </Link>
            </div>
          )}
        </nav>
      </div>
      <Modal
        visible={visible}
        handleOnCloseModal={handleOnCloseModal}
        authGoogleAcount={authGoogleAcount}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
      }
    }
  }
`
