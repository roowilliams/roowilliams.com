import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { Title, Date } from "../components/typography"
import SEO from "../components/seo"
import Comments from "../components/comments"

import BackgroundImage from 'gatsby-background-image'
import media from "styled-media-query";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 4rem 2rem;
  position: relative;
  top: -100px; 
  background-color: rgba(255,255,255,0.9);


  `
const Post = styled.div``
const Content = styled.div`
  margin: 0;
`

const Cover = ({ className, image, children }) => {
  console.log(className, image)
  return (
    <BackgroundImage
      Tag="div"
      fluid={image}
      className={className}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledCover = styled(Cover)`
  width: 100%;
  height: 600px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BoldTitle = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  font-family: 'Montserrat';
  font-weight: 800;
  line-height: 0.8;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  ${
  media.lessThan("large")`
    font-size: 5rem;
  `}
${
  media.lessThan("medium")`
  font-size: 4rem;
`}
${
  media.between("small", "medium")`
  font-size: 3rem;
`}
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={excerpt} image={frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid.src : false} />
      {frontmatter.coverImage && <StyledCover image={frontmatter.coverImage.childImageSharp.fluid}><BoldTitle>{frontmatter.title}</BoldTitle></StyledCover>}
      <Container>
        <Post>
          {!frontmatter.coverImage && <Title>{frontmatter.title}</Title>}
          {!frontmatter.coverImage && <Date>{frontmatter.date}</Date>}
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
        {frontmatter.comments && <Comments post={frontmatter} />}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    excerpt
    frontmatter {
      date(formatString: "MMM DD YYYY")
      path
      title
      comments
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      coverImage {
        childImageSharp {
          fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
