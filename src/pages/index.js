import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1> This is the index page</h1>
    <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
    </p>
  </div>
)
