import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { drop, take, splitEvery } from 'ramda'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import paginationFor from "../components/paginator"

const COLUMNS = 3

/**
 * Return an array of arrays such that elements modulo three appear at the top, rather than the bottom
 * e.g. [[1, 2], [3, 4, 5]]
 * @param pages an array of pages
 */
const groupPages = pages => {
  const count = pages.length % COLUMNS
  return [take(count, pages), ...splitEvery(COLUMNS, drop(count, pages))]
}

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
    {groupPages(pages).map(row =>
      <Row>
        {row.map(({ node }: { node: BlogPage }) => (
          <Col key={node.fields.slug}>
            <PageCol page={node} />
          </Col>
        ))}
      </Row>
    )}
    {numPages > 1 && (
      <Row className="justify-content-md-center">
        <Col md="auto">{paginationFor(urlPrefix, numPages, currentPage)}</Col>
      </Row>
    )}
  </Container>
)

export default PageListCols
