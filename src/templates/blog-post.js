import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Pagetitle from "../components/pagetitle"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import AuthorTitle from "../components/authorTitle"
export default ({ pageContext, data }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next, excerpt } = pageContext
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
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
              <span className="gv-truncate">{previous.frontmatter.title}</span>
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
