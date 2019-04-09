import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const ColorButton = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12),
              0 2px 4px 0 rgba(0,0,0,0.08);
  border-radius: 50%;
  height: 1rem;
  margin-right: 0.5rem;
  width: 1rem;
`;

export default function ColorSelection({ color, onChange }) {
  const baseColors = ['#eb5286', '#794acf', '#5661b3', '#2779bd', '#38a89d', '#1f9d55', '#f2d024', '#de751f'];
  const colors = color && !baseColors.includes(color) ? [ color, ...baseColors] : baseColors;

  return (
    <Wrapper>
      { colors.map((color, key) => <ColorButton key={key} style={{ background: color }} />)}
    </Wrapper>
  );
}
