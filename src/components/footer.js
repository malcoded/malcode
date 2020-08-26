import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import reactIcon from "./../images/react.svg"
import firebaseIcon from "./../images/firebase.svg"
const Footer = ({ menuLinks }) => {
  return (
    <footer>
      <div className="gv-copyright">
        <div className="gv-copyright-item">
          Copyright &copy; {new Date().getFullYear()} malcode <br />
        </div>
        <div className="gv-copyright-item">
          Created with <img src={reactIcon} alt="react" className="gv-pl-4" />
          <img src={firebaseIcon} alt="firebase" /> by
          <a
            href="https://github.com/gvargash"
            className="gv-pl-4"
            target="_blank"
            rel="noreferrer"
          >
            Gildo Vargas
          </a>
        </div>
        <hr className="gv-hr" />
      </div>
      <ul className="gv-menu-footer">
        {menuLinks.map(menu => (
          <li key={menu.name}>
            <Link to={menu.url}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <hr className="gv-hr" />
    </footer>
  )
}
Footer.propTypes = {
  menuLinks: PropTypes.array.isRequired,
}
Footer.defaultProps = {
  menuLinks: [],
}

export default Footer
