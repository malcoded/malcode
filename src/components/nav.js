import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import googleIcon from "./../images/google.svg"

const Nav = ({ siteTitle }) => (
  <nav className="sidenav">
    <Link className="item" to="/">
      <i className="fad fa-search" />
      <span className="item-label">Buscar</span>
    </Link>
    <Link className="item" to="/snippets">
      <i className="fad fa-bolt" />
      <span className="item-label">Snippets</span>
    </Link>
    <Link className="item" to="/lessons">
      <i className="fad fa-tv-retro" />
      <span className="item-label">Video</span>
    </Link>
    <Link className="item" to="/about">
      <i className="fad fa-qrcode" />
      <span className="item-label">About</span>
    </Link>

    <div className="item">
      <img src={googleIcon} alt="google-login" />
      <span className="tag tag-sm">Login</span>
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
