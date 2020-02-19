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
  timeToRead?: string | undefined;
}

export interface BlogPage {
  excerpt?: string | undefined;
  timeToRead: number;
  fields: BlogPageFields;
  frontmatter: BlogPageFrontMatter;
}

const PageCard = ({page}: {page: BlogPage}) => (
  <Card key={page.fields.slug}>
    <Card.Body>
      <Card.Title><Link to={page.frontmatter.path}>{page.frontmatter.title || page.fields.slug}</Link></Card.Title>
      <Card.Body>
        {page.frontmatter.description || page.excerpt}<br />
        {page.frontmatter.date} - {page.timeToRead} min read
      </Card.Body>
    </Card.Body>
  </Card>
)

export default PageCard