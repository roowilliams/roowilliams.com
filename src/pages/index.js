import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"
import PostLink from "../components/postlink"
import { SectionHeader } from "../components/typography"
import { SocialIcon } from "react-social-icons"
import bg from "../images/section-bg.svg"

const Container = styled.section`
  padding: 3rem 2rem 2rem;
  ${props => props.withColor && `background-color: ${props.withColor};`}
`
const Content = styled.div`
  max-width: 1032px;
  margin: 0 auto;
`

const Section = ({ children, withColor, style }) => (
  <Container withColor={withColor} style={style}>
    <Content>{children}</Content>
  </Container>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  const blogPosts = edges
    .filter(
      edge =>
        edge.node.frontmatter.path.match(/^\/([^\/]*).*$/, "$1")[1] ===
          "blog" && !!edge.node.frontmatter.date
    ) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const projects = edges
    .filter(
      edge =>
        edge.node.frontmatter.path.match(/^\/([^\/]*).*$/, "$1")[1] ===
          "project" && !!edge.node.frontmatter.date
    ) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Home" />
      <Section withColor={`rgb(241, 241, 237)`}>
        <SectionHeader>Recent Blog Posts</SectionHeader>
        {blogPosts}
      </Section>
      <Section>
        <SectionHeader>Projects</SectionHeader>
        {projects}
      </Section>

      <Section withColor={`rgb(26, 27, 29)`}>
        <SectionHeader style={{ color: "rgba(255,255,255,0.4)" }}>
          About
        </SectionHeader>
        <p style={{ color: "rgba(255,255,255,0.4)" }}>
          British maker of physical and digital things living in Portland,
          Oregon. London and New York previously.
          <br />
          On a mission to reconnect humans with nature. Working on this site rn.
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
          }
        }
      }
    }
  }
`
