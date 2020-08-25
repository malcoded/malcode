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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/layout.js"),
          // posts: require.resolve("./src/templates/blog-post.js"),
        },
      },
    },
    `gatsby-remark-prismjs`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
