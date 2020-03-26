import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Title, Date, Summary } from "./typography"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
`
const Container = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Content = styled.div`
max-width: 26rem;
margin: 2rem 0;
`

const ImageContainer = styled.div`
margin-left: 1rem;
padding: 1rem;
width: 200px;
`

const StyledImg = styled(Img)`
`

const PostLink = ({ post }) => {
  let featuredImgFluid = post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid : false
  return (
    <Container>
      <Content>
        <StyledLink to={post.frontmatter.path}>
          <Title>{post.frontmatter.title}</Title>
        </StyledLink>
        <Date>{post.frontmatter.date}</Date>

        <StyledLink to={post.frontmatter.path}>
          <Summary>{post.excerpt}</Summary>
        </StyledLink>
      </Content>
      {featuredImgFluid && <StyledLink to={post.frontmatter.path}><ImageContainer><StyledImg fluid={featuredImgFluid} /></ImageContainer></StyledLink>}

    </Container>
  )
}


export default PostLink
