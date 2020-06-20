import React from "react"
import PropTypes from "prop-types"

const Pagetitle = ({ title }) => {
  return (
    <header>
      <h1 className="border-bottom">{title}</h1>
    </header>
  )
}

Pagetitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Pagetitle
