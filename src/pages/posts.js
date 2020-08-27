import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CardPost } from "../components/cardPost"
import Pagetitle from "../components/pagetitle"

const Post = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            description
            title
          }
        }
      }
    }
  `)
  const posts = data.allMdx.nodes || []
  return (
    <Layout>
      <SEO title="Todas las publicaciones" />
      <Pagetitle title="Todas las publicaciones" />
      <div className="gv-row-max-1">
        {posts.map((node, index) => (
          <CardPost
            key={index}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Post
