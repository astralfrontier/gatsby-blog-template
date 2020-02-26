import React from "react"
import PropTypes from "prop-types"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Favicon from './favicon'

const Header = ({ siteTitle, toggleTransparent = false }) => (
  <Navbar bg={toggleTransparent ? "toggle-transparent" : "dark"} variant={"dark"} expand="md" fixed="top" id={'gatsby-site-navbar'}>
    <Navbar.Brand href="/">
      <Favicon />{' '}
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={"justify-content-end ml-auto"}>
        <Nav.Item>
          <Nav.Link href="https://github.com">GitHub</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header