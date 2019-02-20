import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Div100vh from 'react-div-100vh';


import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Div100vh>
          <Container>
            <main>{children}</main>
          </Container>
        </Div100vh>
        <Footer />
      </>
    )}
  />
)

const Container = styled.div`
  padding: 0 55px;
  max-width: 720px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    padding: 0 32px;
  }
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
