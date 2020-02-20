const languages = require('./languages');

const dotenv= require('dotenv')
if(process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
module.exports = {
  pathPrefix: `/equalexperts-de`,
}
module.exports = {
  siteMetadata: {
    title: `Equal Experts`,
    description: `Making software better`,
    author: `devs@equalexperts`,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
        prefixDefault : false,
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `2mx9j3gfirje`,
        // read-only API key
        accessToken: 'DaQQmIZJGOeLLqogIPjc3_bf4gTtAwt_A4Z8S3-GKqU'
      },
    },
  ],
}
