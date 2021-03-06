const { name, description, author, homepage } = require('./package.json')

// Defined separately so that we can reuse the same plugins for mdx
const remarkPlugins = [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 800
    }
  },
  `gatsby-remark-smartypants`,
  {
    resolve: `gatsby-remark-external-links`,
    options: {
      target: `_blank`,
      rel: `nofollow noopener noreferrer`
    }
  }
]

module.exports = {
  siteMetadata: {
    title: name,
    description,
    author,
    siteUrl: homepage
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: remarkPlugins
      }
    },
    {
      resolve: "gatsby-plugin-categories",
      options: {
        templatePath: `${__dirname}/src/templates/category.js`,
      },
    },
    {
      resolve: "gatsby-plugin-tags",
      options: {
        templatePath: `${__dirname}/src/templates/tag.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: name,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
