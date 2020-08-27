import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "./../components/emoji"
import home_image from "./../images/home-pep.svg"
import { CardPost } from "../components/cardPost"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            slug
            frontmatter {
              date(formatString: "DD/MM/YYYY")
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = data.allMdx.edges || []
  return (
    <Layout>
      <SEO title="Aprenda a crear aplicaciones web modernas 🔥" />
      <div className="gv-row">
        <div className="gv-img_portada">
          <img src={home_image} alt="home" />
        </div>
        <div>
          <h1>
            ¿Quieres desarrollar aplicaciones{" "}
            <Emoji symbol="🔥" label="fuego" /> increíbles más{" "}
            <Emoji symbol="⚡" /> rapido?
          </h1>
          <p>¡Has venido al lugar correcto!</p>
          <p>
            malcode es un ecosistema de recursos prácticos para desarrolladores
            que desean crear aplicaciones de alta calidad .<br /> ¡Lleva tus
            habilidades de programación al siguiente nivel!
          </p>
          <Link to="/posts" className="gv-btn gv-btn-orange-outline">
            Explorar
          </Link>
        </div>
      </div>
      <hr className="gv-hr" />
      <header className="gv-container-center-title">
        <h2>Mira las últimas publicaciones</h2>
        <small>NUEVO CONTENIDO CADA POCOS DÍAS</small>
      </header>
      <div className="gv-row-max-3">
        {posts.map(({ node }, index) => (
          <CardPost
            key={index}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
