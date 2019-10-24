import React, { useEffect, useState } from 'react';

import LateralMenu from './lateral-menu';
import { Link } from 'react-router-dom';
import media from '../styled-components/media';
import styled from 'styled-components';

import logo from '../logo.png';

const headerHeight = 48;

const StyledHeader = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: ${ props => props.hasShadow ? '0 1px 2px 0 rgba(36, 50, 66, 0.15)' : 'none' };
  color: #151b26;
  display: flex;
  height: ${ headerHeight }px;
  justify-content: space-between;
  left: 0;
  padding: 0.25rem 2rem;
  position: fixed;
  right: 0;
  top: 0;
`;
const BrandLink = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;
`;
const BrandImage = styled.img`
  margin-right: 0.5rem;
  width: 7rem;
`;
const Navigation = styled.nav`
  display: none;

  ${ media.desktop`display: block;` }
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
const LateralMenuButton = styled.i`
  display: block;
  cursor: pointer;
  color: #646f79;
  font-size: 1.25rem;

  ${ media.desktop`display: none;` }
`;
const MobileGutter = styled.div`
  background: transparent;
  display: block;
  width: 1.25rem;

  ${ media.desktop`display: none;` }
`;

export default function Header() {
  const [hasScrolledDown, setHasScrolledDown ] = useState(false);
  const [showLateralMenu, setShowLateralMenu ] = useState(false);
  const toggleLateralMenu = () => setShowLateralMenu(!showLateralMenu);
  const onScrollHandler = e => setHasScrolledDown(window.scrollY > headerHeight);

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);

    return function cleanup() {
      window.removeEventListener('scroll', onScrollHandler);
    };
  });

  return (
    <StyledHeader hasShadow={hasScrolledDown}>
      <LateralMenuButton className="fas fa-bars" onClick={ toggleLateralMenu }/>
      <LateralMenu isOpen={ showLateralMenu } />
      <BrandLink to="/" title="Gooose Logo">
        <BrandImage src={logo} alt="Gooose Logo" />
      </BrandLink>
      <Navigation>
        <NavigationLinks>
          <li>
            <NavigationLink to="/sign-up">Sign Up</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/sign-in">Sign In</NavigationLink>
          </li>
        </NavigationLinks>
      </Navigation>
      <MobileGutter />
    </StyledHeader>
  );
}
