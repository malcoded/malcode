import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import googleIcon from "./../images/google.svg"

const Nav = ({ siteTitle }) => (
  <nav className="gv-sidenav">
    <Link
      className="gv-item gv-show-on-movile"
      to="/"
      activeClassName="gv-active-link"
    >
      <i className="fad fa-home" />
      <span className="gv-item-label">Inicio</span>
    </Link>
    <span className="gv-item">
      <i className="fad fa-search" />
      <span className="gv-item-label">Buscar</span>
    </span>
    <Link className="gv-item" to="/posts" activeClassName="gv-active-link">
      <i className="fad fa-code-commit" />
      <span className="gv-item-label">Posts</span>
    </Link>
    <Link className="gv-item" to="/lessons" activeClassName="gv-active-link">
      <i className="fad fa-tv-retro" />
      <span className="gv-item-label">Videos</span>
    </Link>
    <Link
      className="gv-item gv-hide-on-movile"
      to="/about"
      activeClassName="gv-active-link"
    >
      <i className="fad fa-qrcode" />
      <span className="gv-item-label">malcode</span>
    </Link>

    <div className="gv-item" activeClassName="gv-active-link">
      <img src={googleIcon} alt="google-login" />
      <span className="gv-tag gv-tag-sm">Login</span>
    </div>
  </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
