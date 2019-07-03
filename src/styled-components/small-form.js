import { Link } from 'react-router-dom';
import media from '../styled-components/media';
import { boxShadow } from '../styled-components/shadows';
import styled from 'styled-components';

export const SmallForm = styled.form`
  background: ${ props => props.theme.containerBackground };
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 2rem 3rem;
  width: 100%;

  ${media.tablet`
    ${boxShadow}
    height: auto;
    max-width: 20rem;
  `}

  ${media.desktop`
    max-width: 20rem;
  `}
`;

export const SmallFormHeader = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  ${media.tablet`
    margin-bottom: 3rem;
  `}
`;

export const SmallFormActions = styled.div`
  ${media.tablet`
    margin-top: 0.5rem 0;
  `}
`;

export const SmallFormLinks = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

export const SmallFormLink = styled(Link)`
  font-size: 0.75rem;
  margin-right: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${media.tablet`
    margin: 0 0.5rem;
  `}
`;
