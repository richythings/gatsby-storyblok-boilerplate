import * as React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"

const Text = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
      <p>This content is aligned {blok.align}</p>
      {JSON.stringify(blok.copy)}
      <hr />
    </div>
  )
}

export default Text
