import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CardPost } from "../components/cardPost"
import Pagetitle from "../components/pageTitle"

const Post = porps => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            slug
            frontmatter {
              date(formatString: "DD/MM/YYYY")
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges || []
  return (
    <Layout>
      <SEO title="Post" />
      <Pagetitle title="Todas las publicaciones" />
      <div className="row-max-1">
        {posts.map(({ node }, index) => (
          <CardPost
            key={index}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            description={node.excerpt}
            date={node.frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Post
