module.exports = {
  siteMetadata: {
    title: `Equal Experts`,
    description: `Making software better`,
    author: `devs@equalexperts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        // for now, write a .env file with the key in. Later this will be
        // added to github in encrypted format using git-crypt.
        accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
      },
    },
  ],
}
