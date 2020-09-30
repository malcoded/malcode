import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Buscador = ({ showSearch, toggleOnSearch }) => {
  const [suggestions, setSuggestions] = useState([])
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              date(formatString: "")
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const findMatches = (wordToMatch, data) => {
    const list = data.allMdx.edges
    return list.filter(item => {
      const regex = new RegExp(wordToMatch, "gi")
      return (
        (item && item.node.frontmatter.title.match(regex)) ||
        (item && item.node.frontmatter.description.match(regex))
      )
    })
  }

  const handleOnSearch = event => {
    const { value } = event.target
    if (value.length > 2) {
      const matchArray = findMatches(value, data)
      const html = matchArray.map(({ node: { frontmatter, fields } }) => {
        const regex = new RegExp(value, "gi")
        const title = frontmatter.title.replace(regex, `<em>${value}</em>`)
        const description = frontmatter.description.replace(
          regex,
          ` <em>${value}</em>`
        )
        return (
          <Link
            className="gv-buscador-hit"
            to={fields.slug}
            onClick={toggleOnSearch}
          >
            <h4>
              <span
                className="gv-hit-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </h4>
            <p
              className="hit-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Link>
        )
      })
      setSuggestions(html)
    } else {
      setSuggestions([])
    }
  }
  return (
    <div
      className={
        showSearch === true
          ? "gv-buscador-container gv-modal-show"
          : "gv-buscador-container"
      }
    >
      <div className="gv-buscador-hits">
        <div className="gv-buscador-form-wrap">
          <input
            type="search"
            placeholder="Buscar..."
            className="gv-buscador-input"
            onChange={handleOnSearch}
          />
          <button
            className="gv-btn gv-btn-sm gv-btn-red gv-buscador-close gv-remove-style"
            onClick={toggleOnSearch}
          >
            Cerrar
          </button>
        </div>
        {suggestions}
      </div>
    </div>
  )
}

export default Buscador
