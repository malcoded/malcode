import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import googleIcon from "./../images/google.svg"
import Buscador from "./Buscador"

import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "./Auth"

const Nav = ({ siteTitle }) => {
  const { currentUser } = useContext(AuthContext)
  const [showSearch, setShowSearch] = useState(false)

  const toggleOnSearch = () => {
    setShowSearch(!showSearch)
  }

  const authGoogleAcount = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      console.log("authGoogleAcount -> error", error)
    }
  }

  const onCloseAccount = () => {
    firebase.auth().signOut()
  }

  return (
    <nav className="gv-sidenav">
      <Link
        className="gv-item gv-show-on-movile"
        activeClassName="gv-active-link"
        to="/"
      >
        <i className="fad fa-home" />
        <span className="gv-item-label">Inicio</span>
      </Link>
      <button className="gv-item gv-remove-style" onClick={toggleOnSearch}>
        <i className="fad fa-search" />
        <span className="gv-item-label">Buscar</span>
      </button>
      <Link to="/posts" className="gv-item" activeClassName="gv-active-link">
        <i className="fad fa-code-commit" />
        <span className="gv-item-label">Posts</span>
      </Link>
      <Link to="/lessons" className="gv-item" activeClassName="gv-active-link">
        <i className="fad fa-tv-retro" />
        <span className="gv-item-label">Videos</span>
      </Link>
      <Link
        to="/about"
        className="gv-item gv-hide-on-movile"
        activeClassName="gv-active-link"
      >
        <i className="fad fa-qrcode" />
        <span className="gv-item-label">{siteTitle}</span>
      </Link>
      {currentUser ? (
        <button className="gv-item gv-remove-style" onClick={onCloseAccount}>
          <img src={currentUser.photoURL} alt={currentUser.displayName} />
          <span className="gv-tag-green gv-tag-sm  gx-mt-2">Salir</span>
        </button>
      ) : (
        <button className="gv-item gv-remove-style" onClick={authGoogleAcount}>
          <img src={googleIcon} alt="google-login" />
          <span className="gv-tag gv-tag-sm ">Login</span>
        </button>
      )}

      <Buscador showSearch={showSearch} toggleOnSearch={toggleOnSearch} />
    </nav>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
