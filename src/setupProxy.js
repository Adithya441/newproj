const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/server1',
    createProxyMiddleware({
      target: 'http://10.10.69.217:6363',
      changeOrigin: true,
      pathRewrite: {
        '^/api/server1': '',
      },
    })
  );

  app.use(
    '/api/server2',
    createProxyMiddleware({
      target: 'http://10.10.69.217:6363',
      changeOrigin: true,
      pathRewrite: {
        '^/api/server2': '',
      },
    })
  );

  app.use(
    '/api/server3',
    createProxyMiddleware({
      target: 'http://10.10.69.123:9987',
      changeOrigin: true,
      pathRewrite: {
        '^/api/server3': '', // Remove the /api/server1 prefix when forwarding the request
      },
    })
  );
};