import { CtaLink } from '../styled-components/buttons';
import { FrontPageSection } from '../styled-components/sections';
import React from 'react';
import media from '../styled-components/media';
import { boxShadow } from '../styled-components/shadows';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  max-width: 80rem;

  ${ media.desktop`
    display: flex;
  `}
`;
const First = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  ${ media.desktop`
    display: block;
    text-align: left;
  `}
`;
const Second = styled.div`
  width: 100%;
`;
const Header = styled.h1`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 24rem;

  ${ media.tablet`font-size: 1.75rem;`}
`;
const HeroImage = styled.img`
  ${boxShadow}
  border: solid 1px #fafafa;
  height: auto;
  margin: 1.5rem 0;
  max-width: 38rem;
  width: 100%;
`;
const Blurp = styled.div`
  color: #4b4b4c;
  font-size: 0.9rem;
  line-height: 1.75;
  max-width: 32rem;

  ${ media.tablet`font-size: 1rem;`}
`;

const TryForFreeButton = styled(CtaLink)`
  margin: 1.5rem 0;
`;

export default function HeroSection() {
  return (
    <FrontPageSection>
      <Container>
        <First>
          <Header>Visualize Work. Deliver Value.</Header>
          <Blurp>
            <p>
              Help your team win! Gooose is the easy-to-use <strong>Kanban board</strong> that makes it easy to
              visualize your work, reduce waste and deliver value to your customers as soon as possible.
            </p>
            <TryForFreeButton to="/sign-up">Sign Up for Free</TryForFreeButton>
          </Blurp>
        </First>
        <Second>
          <HeroImage
            alt="Help your team win with Towery"
            src="images/hero-image-450w.png"
            srcSet="images/hero-image-450w.png 450w,
            images/hero-image-800w.png 800w,
            images/hero-image-1300w.png 1300w"
            />
        </Second>
      </Container>
    </FrontPageSection>
  );
}
