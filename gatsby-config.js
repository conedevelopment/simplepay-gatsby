module.exports = {
  siteMetadata: {
    title: `WooCommerce SimplePay bővítmény`,
    description: `Megbízható és ingyenes WordPress SimplePay bővítmény`,
    author: `Cone Development`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WooCommerce SimplePay bővítmény`,
        short_name: `WooCommerce SimplePay bővítmény`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-91043380-3",
      },
    }
  ]
}