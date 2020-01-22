import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1032px;
`

const Name = styled.h1`
  margin: 0;
  font-size: 0.8rem;
`

const Nav = () => {}

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
