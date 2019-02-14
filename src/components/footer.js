import React from "react";
import styled from "styled-components";

const Footer = () => (
    <FooterDiv>
      <p>A 22ND CENTURY COMPANY</p>
      <p>GOSLETT SHELL Co Ltd.</p>
    </FooterDiv>
)

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    padding: 1.5em 0;
    text-transform: uppercase;
    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 100;
        margin-top: 0;
        margin-bottom: 0.2rem;
        @media (max-width: 700px) {
            font-size: 7px;
        }
    }
`


export default Footer;