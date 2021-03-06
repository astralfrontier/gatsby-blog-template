import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageListCols from '../components/page-list-cols'

const PageList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { tag },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={`Posts tagged "${tag}"`} />
    <PageListCols pages={edges} numPages={1} currentPage={1} />
  </Layout>
)

export default PageList

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            path
            tags
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