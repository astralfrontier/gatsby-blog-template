import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageListCards from '../components/page-list-cards'

const PageList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { numPages, currentPage },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={currentPage === 1 ? "Home" : `Page ${currentPage}`} />
    <PageListCards pages={edges} numPages={numPages} currentPage={currentPage} />
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
            path
          }
          frontmatter {
            date(formatString: "MMM D YYYY")
            title
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