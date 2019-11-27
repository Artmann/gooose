import MarkdownIt from 'markdown-it';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/header';

const Container = styled.div`
  padding: 6rem 2rem;
`;

const Content = styled.div`
  color: ${ props => props.theme.textColor };
  line-height: 2;

  img {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);;
    height: auto;
    margin: 1rem 0;
    max-width: 100%;
  }

  a {
    color: ${ props => props.theme.linkColor };
  }
`;

const DraftWarning = styled.div`
  background: #f5f1c2;
  border-left: solid 8px #ded99e;
  color: #4c4c40;
  padding: 1rem;
`;

export default function StaticPage({ page }) {
  const [ content, setContent ] = useState('');

  useEffect(() => {
    const url = `/content/${page.slug}.md`;

    fetch(url)
      .then(response => response.text())
      .then(markdown => {
        const html = new MarkdownIt().render(markdown);

        setContent(html);
      });

  }, 'page.slug');

  return (
    <div>
      <Header />

      <Container>
        { !page.published && <DraftWarning>This is a draft.</DraftWarning> }

        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Container>
    </div>
  );
}
