import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
`
const Container = styled.div``
const Title = styled.h1`
  color: rgba(0, 0, 0, 0.8);
`

const Summary = styled.div``
const Date = styled.time``
const Content = styled.div``

const PostLink = ({ post }) => (
  <Container>
    <StyledLink to={post.frontmatter.path}>
      <Title>{post.frontmatter.title}</Title>
      <Summary>{post.excerpt}</Summary>
      <Date>{post.frontmatter.date}</Date>
    </StyledLink>
  </Container>
)

export default PostLink
