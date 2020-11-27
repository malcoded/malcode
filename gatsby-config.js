module.exports = {
  siteMetadata: {
    title: `malcode`,
    description: `malcode es un ecosistema de recursos prácticos para desarrolladores que desean construir aplicaciones web y móviles modernas de alta calidad.`,
    author: `@malcode`,
    siteUrl: "https://malcode.dev",
    menuLinks: [
      { name: "Acerca", url: "/about" },
      { name: "Privacidad", url: "/privacity" },
      { name: "Aviso Legal", url: "/legal" },
    ],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/posts`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 860,
        backgroundColor: "none",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Sofia Pro"],
          urls: [`/fonts/fonts.css`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-114960628-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "devcode.dev",
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7834397565485258`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `malcode`,
        short_name: `malcode`,
        start_url: `/`,
        background_color: `#12181b`,
        theme_color: `#12181b`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAMuXthFYMi4Y_BEQ4W9hi0nZj9RRMGZ-A",
          authDomain: "malcode-c704e.firebaseapp.com",
          databaseURL: "https://malcode-c704e.firebaseio.com",
          projectId: "malcode-c704e",
          storageBucket: "malcode-c704e.appspot.com",
          messagingSenderId: "799692595033",
          appId: "1:799692595033:web:e3e5d56e9f708f832f3648",
          measurementId: "G-SF6NHMYR7K",
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about/`,
          `/privacity/`,
          `/legal/`,
          `/404/`,
          `/posts/*`,
        ],
      },
    },
  ],
}
