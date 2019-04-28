import media from '../styled-components/media';
import styled from 'styled-components';

export const FrontPageSection = styled.div`
  align-items: center;
  background: #fff;
  border-bottom: solid 1px #bebeca;
  color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;

  ${ media.tablet`padding: 6rem 4rem;` }
`;
