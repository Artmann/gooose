import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: ${ props => props.color };
  border-radius: 1.5rem;
  flex: 1;
  height: 0.4rem;
  margin: 0 0.1rem;
`;

function PasswordStrengthIndicatorBar({ active = false, color }) {
  return <Bar color={ active ? color : 'transparent' }/>;
}

PasswordStrengthIndicatorBar.propTypes = {
  color: PropTypes.string.isRequired,

  active: PropTypes.bool
};

export default PasswordStrengthIndicatorBar;
