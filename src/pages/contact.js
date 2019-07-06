import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Liam Goslett`, `Goslett Corp`, `Liam Photographer`]} />
    <CatTitle>Contact</CatTitle>
    
    <SmallTitle>For inquiries, comments, portfolio inquiries, or anything else, please contact <a href="mailto:office@goslettshell.co">office@goslettshell.co</a> </SmallTitle>
  </Layout>
)

const CatTitle = styled.h2`
    text-align: center;
    color: black;
    font-family: 'oggroman', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 10vh;
`

const SmallTitle = styled.h3`
    text-align: center;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    opacity: .7;
    font-weight: 100;
  a {
      color: black;
  } 
  @media (max-width: 700px) {
    font-size: 0.875rem;
  }

` 
export default ContactPage
