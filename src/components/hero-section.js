import { CtaLink } from '../styled-components/buttons';
import { FrontPageSection } from '../styled-components/sections';
import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 24rem;
`;
const HeroImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.55) 4px 4px 20px;
  border-radius: 5px;
  height: auto;
  margin-bottom: 1.5rem;
  max-width: 32rem;
  width: 100%;
`;
const Blurp = styled.div`
  color: #4b4b4c;
  font-size: 1rem;
  line-height: 1.75;
  max-width: 32rem;
`;

export default function HeroSection() {
  return (
    <FrontPageSection>
      <Header>Make more time for the work that matters most</Header>
      <HeroImage src="/images/hero-image.png" alt="Get towery.io" />
      <Blurp>
        <p>
          Help your team win! Towery.io is the easy-to-use <strong>Kanban board</strong> to help you
          visualize your work, reduce waste and deliver value to your customers as soon as possible.
        </p>
        <CtaLink to="/sign-up">Sign Up for Free</CtaLink>
      </Blurp>
    </FrontPageSection>
  );
}
