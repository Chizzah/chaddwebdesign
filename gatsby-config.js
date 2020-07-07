const basePath = `/`
const mdx = true

module.exports = {
  siteMetadata: {
    siteTitle: `Chadd Web Design`,
    siteTitleAlt: `I help entrepreneurs gain a competitive edge`,
    siteHeadline: `I help entrepreneurs gain a competitive edge`,
    siteUrl: `https://chaddwebdesign.co.za`,
    siteDescription: `I help entrepreneurs gain a competitive edge in the online world with my web design and pay-per-click campaign management services.`,
    siteLanguage: `en-ZA`,
    author: `Chadd Poggenpoel <info@chaddwebdesign.co.za>`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
