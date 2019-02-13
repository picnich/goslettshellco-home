import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import logo from '../images/logo-icon.jpg';

const Header = () => (
    <TopHeader>
      <div>
        <Link to="/" >
          <img src={logo} alt="Goslett Shell Corp Logo" />
        </Link>
        <Nav>
          <a href="https://google.ca">Shop</a>
          <Link 
            to="/contact"
            activeClassName="active"
            >
            
            Contact
          </Link>
        </Nav>
      </div>
    </TopHeader>
)

const Nav = styled.nav`
    a {
      color: white;
      border-bottom: 1px solid transparent;
      padding-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: .7;
      text-decoration: none;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.875rem;
      transition: .125s ease-in;
      :hover {
        opacity: 1;
      }
    }
    .active {
      border-bottom: 1px solid white;
      padding-bottom: 2px;
    }
    a:first-child {
      margin-right: 2rem;
    }
`


const TopHeader = styled.header`
  position: fixed;
  top: 0;
  max-height: 82px;
  padding: 15px 0;
  width: 100%;
  div {
    padding: 0 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
      padding: 0 16px;
    }
  }
  a {
    height: 100% !important;
    display: inline-block;
  }
  img {
    height: 52px;
  }
`

export default Header
