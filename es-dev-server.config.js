const proxy = require('koa-proxy');

module.exports = {
  port: 3000,
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',
  customMiddlewares: [
    proxy('/api', {
      target: 'http://localhost:3001'
    })
  ],
  moduleDirs: ['node_modules'],
};
