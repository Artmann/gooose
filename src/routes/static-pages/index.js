import StaticPage from './static-page';

const pages = [
  {
    slug: 'getting-started-with-kanban',
    published: false
  }
];

function getStaticPages() {
  return pages;
}

export {
  getStaticPages,
  StaticPage
}
