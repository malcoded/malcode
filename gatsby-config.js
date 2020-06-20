module.exports = {
  siteMetadata: {
    title: `badcode`,
    description: `badcode es un ecosistema de recursos prácticos para desarrolladores que desean construir aplicaciones web y móviles modernas de alta calidad.`,
    author: `@badcode`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Badcode`,
        short_name: `starter`,
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
