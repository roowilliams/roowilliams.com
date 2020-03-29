import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"
import PostLink from "../components/postlink"
import { Section } from "../components/common"
import { SectionHeader, SectionLink } from "../components/typography"

const getPosts = (edges, postType) =>
  edges
    .filter(
      edge =>
        // eslint-disable-next-line
        edge.node.frontmatter.path.match(/^\/([^\/]*).*$/, "$1")[1] ===
        postType &&
        !!edge.node.frontmatter.date &&
        edge.node.frontmatter.publish
    )
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const blogPosts = getPosts(edges, "blog").slice(0, 2)
  const projects = getPosts(edges, "project")

  return (
    <Layout>
      <SEO />
      {!!blogPosts.length &&
        <Section>
          <SectionHeader>Recent Blog Posts</SectionHeader>
          {blogPosts}
          <SectionLink
            to="/blog/"
          >View blog</SectionLink>
        </Section>
      }
      {
        !!projects.length && <Section>
          <SectionHeader>Projects</SectionHeader>
          {projects}
        </Section>
      }
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMM DD YYYY")
            path
            title
            publish
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
