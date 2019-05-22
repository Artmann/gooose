import PasswordStrengthIndicatorBar from './password-strength-indicator-bar';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import zxcvbn from 'zxcvbn';

const passwordStrength = password => {
  const { score } = zxcvbn(password);

  if (score === 2) {
    return 1;
  }

  if (score > 2) {
    return 2;
  }

  return 0;
};

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Bars = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  max-width: 20rem;
`;

const Message = styled.p`
  color: #aaa;
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;

function PasswordStrengthIndicator({ password }) {
  const strength = passwordStrength(password);
  const messages = ['Too Weak', 'Could be stronger', 'Strong password'];
  const message = messages[strength];

  return (
    <Container>
      <Bars>
        <PasswordStrengthIndicatorBar active={true} color="#b47474" />
        <PasswordStrengthIndicatorBar active={strength >= 1} color="#d3d449" />
        <PasswordStrengthIndicatorBar active={strength >= 2} color="#60a56a" />
      </Bars>

      <Message>{message}</Message>
    </Container>
  );
}

PasswordStrengthIndicator.propTypes = {
  password: PropTypes.string.isRequired
};

export default PasswordStrengthIndicator;
