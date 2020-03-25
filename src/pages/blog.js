import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import PostLink from "../components/postlink"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div``

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(
      edge => !!edge.node.frontmatter.date && edge.node.frontmatter.publish
    ) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>{Posts}</Container>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/blog-posts/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD YYYY")
            path
            title
          }
        }
      }
    }
  }
`
