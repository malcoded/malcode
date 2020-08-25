/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const { data } = await graphql(
    `
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              slug
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  data.allMdx.edges.forEach((edge, index) => {
    const slug = edge.node.slug
    const previous = index === edge.length - 1 ? null : edge[index + 1]
    const next = index === 0 ? null : edge[index - 1]
    createPage({
      path: slug,
      component: blogPost,
      context: { slug, previous, next },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
