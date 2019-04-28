import { FrontPageSection } from '../styled-components/sections';
import React from 'react';
import styled from 'styled-components';

const Section = styled(FrontPageSection)`
  background: #e1e0ec;
  flex-direction: column;
  padding: 2rem 1rem;
  text-align: left;
`;
const Feature = styled.div`
  color: #4b4b4c;
  line-height: 1.75;
  padding: 0 2rem;
  max-width: 32rem;
`;
const FeatureHeader = styled.h2`
  color: #333;
  font-weight: 300;
  margin-bottom: 0rem;
`;

export default function FeatureSection() {
  return (
    <Section>
      <Feature>
        <FeatureHeader>Flexibility</FeatureHeader>
        <p>
        Kanban is <strong>flexible</strong>. There are no prescribed phase durations, and priorities are
        constantly reassessed based on the most recent information.
        </p>
      </Feature>
      <Feature>
        <FeatureHeader>Productivity & Efficiency</FeatureHeader>
        <p>
          When work is continuously re-prioritized as needed and <strong>communicated visually</strong>,
          it's clear to both the teams and stakeholders what needs focus.
        </p>
      </Feature>
      <Feature>
        <FeatureHeader>Reduction of Wasted Work</FeatureHeader>
        <p>
          Focuses on the <strong>reduction of waste</strong> in all its forms: over-production, unnecessary motion,
          defects, over-processing and waiting. In terms of software development and project management,
          waste can be thought of as, <strong>Work that is not needed</strong>, <strong>Work that is
          incorrect</strong> or <strong>Time spent doing the wrong work</strong>, rather than
          focusing on the work with the most value.
        </p>
      </Feature>
    </Section>
  );
}
