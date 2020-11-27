import React from "react"
import PropTypes from "prop-types"

const Pagetitle = ({ title, className = "gv-border-bottom" }) => {
  return (
    <header>
      <h1 className={className}>{title}</h1>
    </header>
  )
}

Pagetitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Pagetitle
