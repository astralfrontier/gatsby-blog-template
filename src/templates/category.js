import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageListCards from '../components/page-list-cards'

const PageList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { category },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={`Posts in category "${category}"`} />
    <PageListCards pages={edges} numPages={1} currentPage={1} />
  </Layout>
)

export default PageList

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
            path
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MMM D YYYY")
          }
        }
      }
    }
  }
`