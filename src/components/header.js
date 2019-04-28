import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  aligned-items: center;
  background: #fff;
  box-shadow: ${ props => props.hasShadow ? '0 1px 2px 0 rgba(36, 50, 66, 0.15)' : 'none' };
  color: #151b26;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  padding: 1.25rem 3rem;
  position: fixed;
  right: 0;
  top: 0;
`;

const BrandLink = styled(Link)`
  @font-face {
    font-family: 'Gilroy';
    src: url('Gilroy-ExtraBold.otf');
  }

  align-items: center;
  color: #151b26;
  display: flex;
  font-family: 'Gilroy';
  font-size: 1.25rem;
  text-decoration: none;
`;

const BrandImage = styled.img`
  height: 1.5rem;
  margin-right: 0.5rem;
  width: 1.5rem;
`;

const NavigationLinks = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavigationLink = styled(Link)`
  color: #646f79;
  font-size: 0.75rem;
  font-weight: 700;
  margin: 0 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
`;

export default function Header() {
  const [hasScrolledDown, setHasScrolledDown ] = useState(false);

  const onScrollHandler = e => {
    setHasScrolledDown(window.scrollY > 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
  }, []);

  return (
    <StyledHeader hasShadow={hasScrolledDown}>
      <BrandLink to="/sign-up">
        <BrandImage src="/images/icon.png" alt="towery.io" />
        <span>towery.io</span>
      </BrandLink>
      <nav>
        <NavigationLinks>
          <li>
            <NavigationLink to="/sign-up">Sign Up</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/sign-in">Sign In</NavigationLink>
          </li>
        </NavigationLinks>
      </nav>
    </StyledHeader>
  );
}
