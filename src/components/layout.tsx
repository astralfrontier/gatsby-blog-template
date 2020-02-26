import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from "./header"
import Footer from "./footer"

import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

const Layout = ({ children, toggleTransparent = false, paddingTop = true }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        <Header siteTitle={data.site.siteMetadata.title} toggleTransparent={toggleTransparent} />
      </header>
      <main className={paddingTop ? "padding-top" : ""}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout