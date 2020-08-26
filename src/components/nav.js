import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import googleIcon from "./../images/google.svg"

const Nav = ({ siteTitle }) => (
  <nav className="gv-sidenav">
    <Link className="gv-item" to="/">
      <i className="fad fa-search" />
      <span className="gv-item-label">Buscar</span>
    </Link>
    <Link className="gv-item" to="/posts">
      <i className="fad fa-code-commit" />
      <span className="gv-item-label">Posts</span>
    </Link>
    <Link className="gv-item" to="/lessons">
      <i className="fad fa-tv-retro" />
      <span className="gv-item-label">Videos</span>
    </Link>
    <Link className="gv-item" to="/about">
      <i className="fad fa-qrcode" />
      <span className="gv-item-label">About</span>
    </Link>

    <div className="gv-item">
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
