import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Page({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    frontmatter: { date, title, description, featuredImage },
    fields: {category, tags},
    html,
  } = markdownRemark
  const imageTag = featuredImage ? (
    <Img fluid={featuredImage.childImageSharp.fluid} />
  ) : (
    <></>
  )
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Container fluid={true}>
        <Row>
          <Col>
            <h1 className="mt-4">{title}</h1>
            <p>Posted on {date}</p>
            {imageTag}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {category && (<Link to={`/category/${category}`}>{category}</Link>)}
            {tags && (
            tags.map(tag => (
              <Link to={`/tags/${tag}`} className="badge badge-primary p-2 m-1">
                {tag}
              </Link>
            ))
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
      fields {
        category
        tags
      }
    }
  }
`
