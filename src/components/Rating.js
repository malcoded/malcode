import React from "react"
import Emoji from "./emoji"

export const Rating = ({ handleOnClick, post }) => {
  return (
    <div className="gv-rating-container">
      <button onClick={handleOnClick}>
        <Emoji symbol="👏" />
        <span className="gv-item-counter-claps gv-pl-2">
          {(post && post.claps) || 0}
        </span>
      </button>
    </div>
  )
}
