import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { useStaticQuery, graphql } from "gatsby"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Navbar variant="dark" bg="dark" fixed="bottom">
      <Navbar.Brand>&copy; 2020 @{data.site.siteMetadata.author}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="footer-nav">
        <Nav className={'justify-content-end ml-auto'}>
          <Nav.Item>
            <Nav.Link href={`https://twitter.com/${data.site.siteMetadata.author}`}>Twitter</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer
