const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://good-dogs.m90cinjkfob4u.us-west-2.cs.amazonlightsail.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
