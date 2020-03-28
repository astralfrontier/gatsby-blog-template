import React from "react"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import CategoryNavs from './category-navs'

import Favicon from "./favicon"

interface HeaderProps {
  siteTitle: string;
  toggleTransparent?: boolean;
}

const Header = ({ siteTitle, toggleTransparent = false }: HeaderProps) => {
  return (
    <Navbar
      bg={toggleTransparent ? "toggle-transparent" : "dark"}
      variant={"dark"}
      expand="md"
      fixed="top"
      id={"gatsby-site-navbar"}
    >
      <Navbar.Brand href="/">
        <Favicon /> {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <CategoryNavs />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
