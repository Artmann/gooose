import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CtaLink = styled(Link)`
  background: #15cd72;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  line-height: 2rem;
  padding: 0.25rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.25s ease, border 0.25s ease, color 0.25s ease;
  vertical-align: middle;
  white-space: nowrap;
`;

export const CtaButton = styled.a`
  appearance: none;
  background: #15cd72;
  border: 1px solid #0069ff;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  height: 2rem;
  line-height: 2rem;
  padding: 0.25rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.25s ease, border 0.25s ease, color 0.25s ease;
  vertical-align: middle;
  white-space: nowrap;
`;
