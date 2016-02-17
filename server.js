import fs from 'fs';
import path from 'path';

import express from 'express';
import compression from 'compression';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './modules/routes';

const app = express();

const renderPage = (res, html) => {
  fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) throw err;
    const output = data.replace('<div id="app"></div>', `<div id="app">${html}</div>`);

    res.send(output);
  });
};

app.use(compression());

app.use(express.static(path.resolve(__dirname, 'public')));

// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.get('*', (req, res) => {
  match({ routes: routes(), location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      renderPage(res, appHtml);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Production Express server running at localhost: ${PORT}`));
