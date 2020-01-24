import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import PostLink from "../components/postlink"
import { SectionHeader } from "../components/typography"
import SEO from "../components/seo"

const Container = styled.section`
  padding: 3rem 0 2rem;
  ${props => props.withColor && `background-color: ${props.withColor};`}
`
const Content = styled.div`
  max-width: 1032px;
  margin: 0 auto;
`

const Section = ({ children, withColor }) => (
  <Container withColor={withColor}>
    <Content>{children}</Content>
  </Container>
)

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Home" />
      <Section withColor={`rgb(241, 241, 237)`}>
        <SectionHeader>Recent Blog Posts</SectionHeader>
        {posts}
      </Section>
      <Section>
        <SectionHeader>Projects</SectionHeader>
        <p>Coming soon...</p>
      </Section>

      <Section withColor={`rgb(26, 27, 29)`}>
        <SectionHeader style={{ color: "rgba(255,255,255,0.4)" }}>
          About
        </SectionHeader>
        <p style={{ color: "rgba(255,255,255,0.4)" }}>Coming soon...</p>
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
