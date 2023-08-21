import React from "react"
import { storyblokEditable } from "gatsby-source-storyblok"

const Hero = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} className="border">
      <p>COMPONENT: HERO</p>
      <h2>{blok.title}</h2>
      <p>{blok.copy}</p>
      <hr />
    </div>
  )
}

export default Hero
