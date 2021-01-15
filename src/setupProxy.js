const { createProxyMiddleware } = require('http-proxy-middleware');
const serviceAPI = process.env.REACT_APP_SERVICE_API;

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: serviceAPI,
            changeOrigin: true,
        })
    );
};
