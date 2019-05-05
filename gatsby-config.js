module.exports = {
  siteMetadata: {
    title: `Aspiring Minds`,
    author: `Meredith Ryals`,
    description: `Motivate, Educate, Elevate.`,
    siteUrl: `https://www.aspiringminds.com.au`,
    social: {
      facebook: `aspiringminds`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139522635-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aspiring Minds`,
        short_name: `Aspiring Minds`,
        start_url: `/`,
        background_color: `#63c5ff`,
        theme_color: `#0043a4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.aspiringminds.com.au`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`], // Purge only tailwind
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
