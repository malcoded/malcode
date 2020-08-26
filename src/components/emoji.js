import React from "react"
const Emoji = props => {
  return (
    <span
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
      className={props.className ? props.className : null}
    >
      {props.symbol}
    </span>
  )
}
export default Emoji
