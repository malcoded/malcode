import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Emoji from "../components/emoji"
import not_found_page from "./../images/not_found.svg"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pagina no encontrada" />
    <div className="gv-row-max-1">
      <div className="gv-container-not-found">
        <h3>PAGINA NO ENCONTRADA</h3>
        <div className="gv-img_portada_not_found">
          <img src={not_found_page} alt="pagina no encontrada" />
        </div>
        <p>
          Acabas de llegar a una ruta que no existe ... la tristeza.
          <Emoji arial-label="la-tristeza" symbol="😭" />
        </p>
        <Link to="/posts" className="gv-btn gv-btn-green">
          Ver otras publicaciones
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
