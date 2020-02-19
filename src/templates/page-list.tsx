import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import paginationFor from "../components/paginator"
import PageCard, { BlogPage } from "../components/page-card"

const PageList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { numPages, currentPage },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={currentPage === 1 ? "Home" : `Page ${currentPage}`} />
    <Container fluid={true}>
      <Row>
        {edges.map(({ node }: {node: BlogPage}) => <Col key={node.fields.slug}><PageCard page={node} /></Col>)}
      </Row>
      {(numPages > 1) && (
      <Row className="justify-content-md-center">
        <Col md="auto">{paginationFor("", numPages, currentPage)}</Col>
      </Row>
      )}
    </Container>
  </Layout>
)

export default PageList

export const pageListQuery = graphql`
  query pageListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM D YYYY")
            title
            path
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`