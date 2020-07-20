import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "./../components/emoji"
import home_image from "./../images/home-pep.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="row">
      <div className="img_portada">
        <img src={home_image} alt="home" />
      </div>
      <div>
        <h1>
          ¿Quieres desarrollar aplicaciones <Emoji symbol="🔥" label="fuego" />{" "}
          increíbles más <Emoji symbol="⚡" /> rapido?
        </h1>
        <p>¡Has venido al lugar correcto!</p>
        <p>
          badcode es un ecosistema de recursos prácticos para desarrolladores
          que desean crear aplicaciones alta calidad .<br /> ¡Lleva tus
          habilidades de programación al siguiente nivel!
        </p>
        <Link to="/snippets" className="btn btn-orange-outline">
          Explorar
        </Link>
      </div>
    </div>
    <hr className="hr" />
  </Layout>
)

export default IndexPage
