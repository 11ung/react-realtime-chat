const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = process.env.REACT_APP_API_URL;
const API_ENDPOINT = '/api';

module.exports = (app) => {
    const socketProxy= createProxyMiddleware('/socket', {
      target: API_URL,
      changeOrigin: true,
      ws: true, 
    });
    app.use(socketProxy);

    app.use(
      API_ENDPOINT,
      createProxyMiddleware({
          target: API_URL,
          changeOrigin: true,
      })
    )
  };
