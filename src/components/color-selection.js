import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const ColorBorder = styled.div`
  border: solid 2px transparent;
  border-color: ${ props => props.selected ? 'rgba(0, 0, 0, 0.2);' : 'transparent;' }
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  margin-right: 0.25rem;
  padding: 3px;
  width: 1rem;

  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

const ColorButton = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export default function ColorSelection({ color, onChange = () => {} }) {
  const baseColors = ['#eb5286', '#794acf', '#5661b3', '#2779bd', '#38a89d', '#1f9d55', '#f2d024', '#de751f'];
  const colors = color && !baseColors.includes(color) ? [ color, ...baseColors] : baseColors;

  return (
    <Wrapper>
      { colors.map((c, key) => {
        return (
          <ColorBorder selected={ color === c } key={ key } onClick={ () => onChange(c) } data-test-color={ c }>
            <ColorButton style={{ background: c }}/>
          </ColorBorder>
        )
      })}
    </Wrapper>
  );
}

ColorSelection.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func
};
