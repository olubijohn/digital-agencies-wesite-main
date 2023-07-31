import React from 'react'
import "./section.css"

function Section({head, body}) {
  return (
      <div className="item">
        <div className="item-head">{head}</div>
        <div className="item-body">{body}</div>
      </div>
  )
}

export default Section   