import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
`
const Post = styled.div``
const Title = styled.h1``
const Date = styled.time``
const Content = styled.div`
  margin: 3rem 0;
`

/*

For SEO

      <div>
        {post.frontmatter.keywords.map(tag => (
          <div>{tag}</div>
        ))}
      </div>


*/
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
        <Post>
          <Title>{frontmatter.title}</Title>
          <Date>{frontmatter.date}</Date>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD YYYY")
        path
        title
        keywords
      }
    }
  }
`
