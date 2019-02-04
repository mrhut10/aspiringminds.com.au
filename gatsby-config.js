module.exports = {
  siteMetadata: {
    title: `Aspiring Minds`,
    description: `Motivate, Educate, Elevate`,
    siteUrl: `https://www.aspiringminds.com.au`,
    author: `@luke_bennett_`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aspiring Minds`,
        short_name: `Aspiring Minds`,
        start_url: `/`,
        background_color: `#63c5ff`,
        theme_color: `#0043a4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`], // Purge only tailwind
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`, // Must me last plugin
  ],
};
