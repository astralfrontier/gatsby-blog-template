import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"

export interface BlogPageFields {
  slug?: string | undefined;
}

export interface BlogPageFrontMatter {
  date?: string | undefined;
  title?: string | undefined;
  path?: string | undefined;
  description?: string | undefined;
}

export interface BlogPage {
  fields: BlogPageFields;
  frontmatter: BlogPageFrontMatter;
}

const PageCard = ({page}: {page: BlogPage}) => (
  <Card key={page.fields.slug}>
    <Card.Body>
      <Card.Title><Link to={page.frontmatter.path}>{page.frontmatter.title || page.fields.slug}</Link></Card.Title>
      <Card.Body>{page.frontmatter.description}</Card.Body>
    </Card.Body>
  </Card>
)

export default PageCard