import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About page" />
    <h1>Hi About Page page</h1>
    <p>Welcome to About Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
