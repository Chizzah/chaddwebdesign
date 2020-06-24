import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const ChaddWeb = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <About offset={1.25} factor={2} />
      <Projects offset={2.75} factor={2} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default ChaddWeb
