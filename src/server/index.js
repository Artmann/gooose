const { join } = require('path');
const fs = require('fs');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = require('../app-wrapper');

const port = process.env.PORT || 4200;
const app = express();

const router = express.Router();

const serverRenderer = async (req, res, next) => {
  const path = join(__dirname, '..', '..', 'build', 'index.html');

  try {
    const content = await fs.promises.readFile(path, { encoding: 'utf8' });
    const appElement = React.createElement(App.default, {}, null);
    const renderedApp = ReactDOMServer.renderToString(appElement);

    return res.send(
      content.replace(
        '<div id="root"></div>',
        `<div id="root">${ renderedApp }</div>`
      )
    );
  } catch(error) {
    console.error(error);
    return res.status(500).send('An error occurred');
  }
}

router.use('^/$', serverRenderer);

const staticsPath = join(__dirname, '..', '..', 'build');

router.use(
  express.static(staticsPath, { maxAge: '30d' })
);

app.use(router);

app.listen(port, () => {
  console.log(`[Server] running on port ${port}`);
});