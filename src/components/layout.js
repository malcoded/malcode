import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/tag"

import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import "./../assets/fontawesome/css/all.min.css"
import "./variables.css"
import "./layout.css"
import "./row.css"
import "./cardPost.css"
import { AuthProvider } from "./Auth"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <AuthProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <div className="gv-main-container">
        <main>{children}</main>
        <Footer menuLinks={data.site.siteMetadata.menuLinks} />
      </div>
    </AuthProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
