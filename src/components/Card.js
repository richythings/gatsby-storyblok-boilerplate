import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"

const Card = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <p>COMPONENT: INSTANCE CARD</p>
      <h1>{blok.title ? blok.title : "No Title"}</h1>
      <hr />
    </div>
  )
}

export default Card
