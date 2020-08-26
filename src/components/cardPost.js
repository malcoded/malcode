import React from "react"
import { Link } from "gatsby"
export const CardPost = ({ slug, title, date, description }) => {
  return (
    <article className="gv-card-post">
      <Link to={slug}>
        <header>
          <h3>{title}</h3>
          <small>{date}</small>
        </header>
        <section>
          <p
            className="gv-subtext"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </section>
      </Link>
    </article>
  )
}
