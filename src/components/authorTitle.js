import React from "react"
import { Link } from "gatsby"
const AuthorTitle = ({ url = "/about", name = "malcode" }) => {
  return (
    <em>
      By <Link to={url}>{name}</Link>
    </em>
  )
}

export default AuthorTitle
