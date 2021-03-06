import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { Section } from "../components/common"
import { SectionHeader } from "../components/typography"

const Container = styled.footer`
  padding: 0.6rem 0;
  text-align: center;
  background-color: rgb(26, 27, 29);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
`
const DarkLink = styled.a`
 color: rgba(255, 255, 255, 0.6);
 text-decoration: underline;

 &:hover {
  color: rgba(255, 255, 255, 0.9);
 }

`
const Past = styled.div`
font-size: 0.6rem;
color: rgba(255,255,255,0.4);
line-height: 1.4;
border-top: 1px solid rgba(255, 255, 255, 0.2);
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
display: inline-block;
padding: 0.5rem 0.5rem;
margin: -0.6rem 0 1rem 0;
`
const Blurb = styled.p`
color: rgba(255,255,255,0.4);
max-width: 26rem;
line-height: 1.5;
font-size: 0.8rem;
`

export default () => (
  <>
    <Section style={{ backgroundColor: "rgb(26, 27, 29)" }}>
      <SectionHeader style={{ color: "rgba(255,255,255,0.6)" }}>
        About
        </SectionHeader>
      <Blurb>
        British designer + developer + maker of physical + digital things living in Portland,
        Oregon.<br />
      I would like to design things to protect our natural ecosystems.<br /> You too? Let's chat: <DarkLink href="mailto:roo@roowilliams.com">roo@roowilliams.com</DarkLink></Blurb>
      <Past>
        2019: Prototype Developer @ Twitter NYC<br />
          2017: Product Developer @ Majestyk NYC<br />
          2015: Creative Technologist @ Anomaly NYC<br />
          2012: Labs Tech Lead @ TMW LDN<br />
          2012: Grad. BA Product Design @ Central Saint Martins LDN</Past>


      <div>
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
        <SocialIcon
          url="https://www.linkedin.com/in/roowilliams/"
          bgColor="rgba(255,255,255,0.4)"
          style={{ height: 41, width: 41, marginRight: 10 }}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </Section>
    <Container>© {new Date().getFullYear()} Roo Williams</Container>
  </>
)
