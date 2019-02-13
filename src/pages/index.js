import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Liam Goslett`, `Goslett Corp`, `Liam Photographer`]} />
    <Title>The lights are on but there ain't nobody home.</Title>
  </Layout>
)

const Title = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-family: 'oggroman', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 2px; 
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }

` 
export default IndexPage
