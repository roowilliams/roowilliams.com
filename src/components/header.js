import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  padding: 1rem 0;
`

const Name = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin: 0 2rem;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Name>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Name>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
