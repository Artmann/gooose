import Header from '../components/header';
import HeroSection from '../components/hero-section';
import React from 'react';
import styled from 'styled-components';

const FrontPage = styled.div`
  background: #fff;
`;

export default function Home() {
  return (
    <FrontPage>
      <Header />
      <HeroSection />
    </FrontPage>
  );
}
