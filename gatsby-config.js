const basePath = `/`
const mdx = true

module.exports = {
  siteMetadata: {
    siteTitle: `Chadd Web Design`,
    siteTitleAlt: `Chadd Web Design - Gain a competitive edge in the online world`,
    siteHeadline: `Chadd Web Design - Gain a competitive edge in the online world`,
    siteUrl: `https://chaddwebdesign.co.za`,
    siteDescription: `I help entrepreneurs gain a competitive edge in the online world with my web design and pay-per-click campaign management services.`,
    siteLanguage: `en-ZA`,
    siteImage: `/social.png`,
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
