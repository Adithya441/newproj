const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(
    '/api/server1', // This is the path to call server 1
    createProxyMiddleware({
      target: 'http://10.10.69.217:6363',
      changeOrigin: true,
      pathRewrite: {
        '^/api/server1': '', // Remove the /api/server1 prefix when forwarding the request
      },
    })
  );
 
  app.use(
    '/api/server2', // This is the path to call server 2
    createProxyMiddleware({
      target: 'http://10.10.69.217:6363',
      changeOrigin: true,
      pathRewrite: {
        '^/api/server2': '', // Remove the /api/server2 prefix when forwarding the request
      },
    })
  );
};