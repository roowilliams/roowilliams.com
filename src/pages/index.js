import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import PostLink from "../components/postlink"
import { SectionHeader } from "../components/typography"
import { SocialIcon } from "react-social-icons"

const Container = styled.section`
  padding: 3rem 2rem 2rem;
`
const Content = styled.div`
  max-width: 1032px;
  margin: 0 auto;
`

const Section = ({ children, style }) => (
  <Container style={style}>
    <Content>{children}</Content>
  </Container>
)

const getPosts = (edges, postType) =>
  edges
    .filter(
      edge =>
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
  const blogPosts = getPosts(edges, "blog")
  const projects = getPosts(edges, "project")

  return (
    <Layout>
      <SEO title="Home" />
      {!!blogPosts.length &&
        <Section>
          <SectionHeader>Recent Blog Posts</SectionHeader>
          {blogPosts}
        </Section>
      }
      {
        !!projects.length && <Section>
          <SectionHeader>Projects</SectionHeader>
          {projects}
        </Section>
      }

      <Section style={{ backgroundColor: "rgb(26, 27, 29)" }}>
        <SectionHeader style={{ color: "rgba(255,255,255,0.4)" }}>
          About
        </SectionHeader>
        <p style={{ color: "rgba(255,255,255,0.4)" }}>
          British maker of physical and digital things living in Portland,
          Oregon.
          <br />
          London and New York previously.
          <br />
          Creating digital products. Site continually WIP.
        </p>
        <SocialIcon
          url="https://instagram.com/roowilliams"
          bgColor="rgba(255,255,255,0.4)"
          style={{ height: 41, width: 41, marginRight: 10 }}
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://twitter.com/roowilliams"
          bgColor="rgba(255,255,255,0.4)"
          style={{ height: 41, width: 41, marginRight: 10 }}
          target="_blank"
          rel="noopener noreferrer"
        />
      </Section>
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
