import React from "react"
import styled from "styled-components"
import { SocialIcon } from "react-social-icons"
import { Section } from "../components/common"
import { SectionHeader } from "../components/typography"

const Container = styled.footer`
  padding: 0.8rem 0;
  text-align: center;
  background-color: rgb(26, 27, 29);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
`

export default () => (
  <>
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
    <Container>© {new Date().getFullYear()} Roo Williams</Container>
  </>
)
