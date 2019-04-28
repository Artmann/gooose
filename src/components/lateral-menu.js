import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 48px;
`;
const Menu = styled.div`
  background: #fff;
  bottom: 0;
  left: 0;
  padding: 1.5rem 1rem;
  position: absolute;
  top: 0;
`;
const NavigationItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const NavigationItem = styled.li`
  border-bottom: solid 1px #d0d0d0;
  min-width: 14rem;
  padding: 0.75rem 0;
`;
const NavigationLink = styled(Link)`
color: #222;
cursor: pointer;
font-size: 0.8rem;
font-weight: 400;
text-decoration: none;
`;

export default function LateralMenu({ isOpen }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Backdrop>
      <Menu>
        <NavigationItems>
          <NavigationItem>
            <NavigationLink to="/sign-up">Sign Up</NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/sign-in">Sign In</NavigationLink>
          </NavigationItem>
        </NavigationItems>
      </Menu>
    </Backdrop>
  );
}

LateralMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
