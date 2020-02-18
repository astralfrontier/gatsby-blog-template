import React from "react"
import PropTypes from "prop-types"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Favicon from './favicon'

const Header = ({ siteTitle }) => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="/">
      <Favicon />{' '}
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end">
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