const express = require('express');
const helmet = require('helmet');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const { PORT = 8000 } = process.env;

app.use(helmet());

app.use('/image/', createProxyMiddleware({ 
  target: 'https://image.tmdb.org',
  changeOrigin: true,
}));

app.listen(PORT);
