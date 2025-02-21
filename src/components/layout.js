import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Text from "./Text"
import Columns from "./Columns"
import Hero from "./Hero"

import Card from "./Card"

import Media from "./Media"

import People from "./People"
import Logos from "./Logos"

storyblokInit({
  accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
  use: [apiPlugin],
  components: {
    text: Text,
    columns: Columns,
    hero: Hero,
    instance_card: Card,
    media: Media,
    people: People,
    logos: Logos,
  },
})

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
