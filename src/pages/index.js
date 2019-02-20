import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Liam Goslett`, `Goslett Corp`, `Liam Photographer`]} />
    <Title>shell com·pa·ny</Title>
    <Phonetic>/ˈSHel ˌkəmp(ə)nē/</Phonetic>
    <Grammer>noun</Grammer>
    <Definition>an inactive company used as a vehicle for various financial maneuvers or kept dormant for future use in some other capacity.</Definition>
  </Layout>
)

const Title = styled.h1`
  color: white;
  font-size: 2.3rem;
  margin:0;
` 

const Phonetic = styled.h3`
  font-size: 20px;
  margin:0;
  margin-top: 4px;
  opacity: .7;
`
const Grammer = styled.h6`
  font-size: 1rem;
  margin:0;
  margin-top: 1rem;
  font-style: italic;
`
const Definition = styled.p`
  font-size: 1rem;
  padding-left: 1.25rem;
  opacity: .7;
    @media (max-width: 700px) {
    font-size: 0.875rem;
  }
`
export default IndexPage
