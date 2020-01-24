import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  padding: 1rem 0;
  text-align: center;
  background-color: rgb(10, 0, 13);
  color: rgba(255, 255, 255, 0.4);
`

export default () => (
  <Container>© {new Date().getFullYear()} Roo Williams</Container>
)
