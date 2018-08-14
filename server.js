/**
 * WEBPACK Dev Server
 */
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var connect = require('connect');
var cors = require('connect-cors');
var config = require('./webpack.config');
var fs = require('fs');
var serveStatic = require('serve-static');

var port = 8080;

var webpackConfig = webpack(config);

var protocol = 'http';
var domain = 'localhost';

var serverUrl = protocol + '://' + domain + ':' + port;

var app = connect()
  .use(webpackDevMiddleware(webpackConfig, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: 'verbose',
  }))
  .use(webpackHotMiddleware(webpackConfig, {}))
  .use(serveStatic('./'));

app.listen(port);
