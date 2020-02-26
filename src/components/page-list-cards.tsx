import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "react-bootstrap/Card"

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

const PageCard = ({ page }: { page: BlogPage }) => {
  const imageTag = page.frontmatter.featuredImage ? (
    <Card.Header>
      <Img fluid={page.frontmatter.featuredImage.childImageSharp.fluid} />
    </Card.Header>
  ) : (
    <></>
  )
  return (
    <Card key={page.fields.slug}>
      {imageTag}
      <Card.Body>
        <Card.Title>
          <Link to={page.fields.path}>
            {page.frontmatter.title || page.fields.slug}
          </Link>
        </Card.Title>
        <Card.Body>
          {page.frontmatter.description || page.excerpt}
          <br />
          <small className={"small-caps"}>{page.frontmatter.date} - {page.timeToRead} min read</small>
        </Card.Body>
      </Card.Body>
    </Card>
  )
}

const PageListCards = ({
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
          <PageCard page={node} />
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

export default PageListCards
