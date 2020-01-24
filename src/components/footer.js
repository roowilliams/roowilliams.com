import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  padding: 0.8rem 0;
  text-align: center;
  background-color: rgb(26, 27, 29);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
`

export default () => (
  <Container>© {new Date().getFullYear()} Roo Williams</Container>
)
