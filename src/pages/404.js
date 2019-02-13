import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>404.</Title>
    <SmallTitle>
        <Link to="/" >
          Go home fam.
        </Link>
    </SmallTitle>
  </Layout>
)

const Title = styled.h1`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-family: 'oggroman', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 3rem;
  letter-spacing: 2px; 
` 

const SmallTitle = styled.h3`
    text-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    opacity: .7;
    font-weight: 100;
  a {
      color: white;
  } 
  @media (max-width: 700px) {
    font-size: 0.875rem;
  }

` 

export default NotFoundPage
