// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy for requests to https://169f-34-32-158-43.ngrok-free.app/
  app.use(
    "/api/ngrok",
    createProxyMiddleware({
      target: "https://169f-34-32-158-43.ngrok-free.app/",
      changeOrigin: true,
    })
  );

  // Proxy for requests to http://127.0.0.1:5000/
  app.use(
    "/api/local",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000/",
      changeOrigin: true,
    })
  );
};
