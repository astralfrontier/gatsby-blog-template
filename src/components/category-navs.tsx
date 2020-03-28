import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "react-bootstrap/Nav"
import { append, countBy, flatten, identity, isNil, keys, map, path, reduce, reject, sortBy } from 'ramda'

/**
 * Find all categories used in the site.
 * Sort by page count.
 * Currently returns all categories
 * TODO: Return the first five as navs, followed by a dropdown containing the remaining categories.
 */

export default () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      nodes {
        fields {
          category
        }
      }
    }
  }  
  `)

  const categories = flatten(map(path(['fields', 'category']), data.allMarkdownRemark.nodes))
  const catCounts = countBy(identity, reject(isNil, categories))
  const catCountsArray = reduce((a, k) => append([k, catCounts[k]], a), [], keys(catCounts))
  const sortedCatCounts = map(e => e[0], sortBy(e => -e[1], catCountsArray))

  return (
    <>
    {map(category => (
      <Nav.Item>
        <Nav.Link className={'small-caps'} href={`/category/${category}`}>{category}</Nav.Link>
      </Nav.Item>
    ), sortedCatCounts)}
    </>
  )
}