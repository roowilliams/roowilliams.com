/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// below from https://www.gatsbyjs.org/docs/adding-markdown-pages/
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createNodeField } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogpost.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const contentType = node.frontmatter.path.match(/^\/([^\/]*).*$/, "$1")[1]
    // const fileNode = getNode(node.parent)
    let template = null

    switch (contentType) {
      case "blog":
        template = blogPostTemplate
        break
      case "project":
        template = projectTemplate
        break
      default:
        template = blogPostTemplate
        break
    }

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent)
//     console.log(`\n`, fileNode)
//     console.log(`\n`, fileNode.relativePath)
//   }
// }
