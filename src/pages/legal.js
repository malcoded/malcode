import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagetitle from "../components/pageTitle"

const Legal = () => {
  return (
    <Layout>
      <SEO title="Legal" />
      <Pagetitle title="Sobre este sitio web" />
      <div className="bc-about-section">
        <h3 style={{ padding: 0, margin: 0 }}>Contacto</h3>
        <span>E-Mail: </span>
        <a href="mailto:contacto@malcode.dev" target="_blank" rel="noreferrer">
          contacto@malcode.dev
        </a>
      </div>
    </Layout>
  )
}

export default Legal
