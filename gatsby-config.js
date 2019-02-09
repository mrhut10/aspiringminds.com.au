module.exports = {
  siteMetadata: {
    title: `Aspiring Minds`,
    author: `Meredith Ryals`,
    description: `Motivate, Educate, Elevate.`,
    // siteUrl: `https://www.aspiringminds.com.au`,
    social: {
      facebook: `aspiringminds`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aspiring Minds`,
        short_name: `Aspiring Minds`,
        start_url: `/`,
        background_color: `#63c5ff`,
        theme_color: `#0043a4`,
        display: `minimal-ui`,
        icon: `content/assets/icon.svg`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.aspiringminds.com.au`,
    //   },
    // },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`], // Purge only tailwind
      },
    },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
  ],
};
