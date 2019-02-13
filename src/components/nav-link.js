import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = ({ children, to }) => (
    <Link 
        to={to}>
        {children}
    </Link>

)

export default NavLink;