const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://e-commerce-one-fawn.vercel.app",
      changeOrigin: true,
    })
  );
};
