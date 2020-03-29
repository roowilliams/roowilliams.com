module.exports = {
  siteMetadata: {
    title: `Roo Williams`,
    url: "https://roowilliams.com",
    siteUrl: "https://roowilliams.com",
    description: `Portfolio and blog of Roo Williams - designer and maker of digital and physical things.`,
    author: `@roowilliams`,
    image: "/roowilliams.png",
    twitterUsername: "@roowilliams",
    instagramUsername: "@roowilliams",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "projects",
        link: "/projects",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
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
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `roowilliams`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roo Williams`,
        short_name: `Roo Williams`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-108279549-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    `gatsby-plugin-feed`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
