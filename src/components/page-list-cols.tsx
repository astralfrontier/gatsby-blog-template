import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import paginationFor from "../components/paginator"

export interface BlogPageFields {
  slug: string
  path: string
}

export interface BlogPageFrontMatter {
  date?: string | undefined
  title?: string | undefined
  description?: string | undefined
  featuredImage?: any
}

export interface BlogPage {
  excerpt?: string | undefined
  timeToRead: number
  fields: BlogPageFields
  frontmatter: BlogPageFrontMatter
}

const PageCol = ({ page }: { page: BlogPage }) => {
  const imageTag = page.frontmatter.featuredImage ? (
    <Img fluid={page.frontmatter.featuredImage.childImageSharp.fluid} />
  ) : (
    <></>
  )
  return (
    <div key={page.fields.slug}>
      <Link className={"nostyle"} to={page.fields.path}>
        {imageTag}
        <h4>{page.frontmatter.title || page.fields.slug}</h4>
        <div className={"text-muted"}>
          {page.frontmatter.description || page.excerpt}
        </div>
        <br />
        <small className={"small-caps"}>
          {page.frontmatter.date} - {page.timeToRead} min read
        </small>
      </Link>
    </div>
  )
}

const PageListCols = ({
  pages,
  numPages,
  currentPage,
  urlPrefix = "",
}: {
  pages: object[]
  numPages: number
  currentPage: number
  urlPrefix?: string
}) => (
  <Container fluid={true}>
    <Row>
      {pages.map(({ node }: { node: BlogPage }) => (
        <Col key={node.fields.slug}>
          <PageCol page={node} />
        </Col>
      ))}
    </Row>
    {numPages > 1 && (
      <Row className="justify-content-md-center">
        <Col md="auto">{paginationFor(urlPrefix, numPages, currentPage)}</Col>
      </Row>
    )}
  </Container>
)

export default PageListCols
