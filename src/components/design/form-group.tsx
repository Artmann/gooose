import React, { Children, ReactChildren, useState, useLayoutEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';

import { isTabletOrSmaller } from '../../styled-components/media';

interface FormGroupProps {
  children: ReactChildren;
  style?: object;
  toggle?: boolean;
}

const BaseContainer = styled.div`
  display: flex;
  border-bottom: solid 1px ${props => props.theme.borderColor};
  min-height: 8rem;
  padding: 2rem 0;
  padding-bottom: 3rem;
  width: 100%;
`;

const Container = styled(BaseContainer)`
  flex-direction: row;
  justify-content: space-between;
`;

const CompactContainer = styled(BaseContainer)`
  position: relative;
  flex-direction: column;
`;

const Icon = styled.div`
  bottom: 0.5rem;
  color: ${ props => props.theme.linkColor };
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  position: absolute;
  right: 0.5rem;

  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default function FormGroup({ children, style = {}, toggle = false }: FormGroupProps) {
  const [ compactModeEnabled, setCompactModeEnabled ] = useState(true);
  const [ isToggled, setIsToggled ] = useState(false);
  const [ main, extra ] = Children.toArray(children);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      setCompactModeEnabled(isTabletOrSmaller());
    }

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => window.removeEventListener('resize', resizeHandler);
  });

  const toggleButton = <Icon><i onClick={ () => setIsToggled(!isToggled) } className='fas fa-retweet'></i></Icon>;

  if (compactModeEnabled) {
    return (
      <CompactContainer style={ style }>
        <ReactCardFlip isFlipped={ isToggled } flipDirection='horizontal' containerStyle={{ maxHeight: '100%' }}>
          { main }

          { extra }
        </ReactCardFlip>
        { toggle && toggleButton }
      </CompactContainer>
    );
  }


  return (
    <Container style={ style }>
      { children }
    </Container>
  );
}
