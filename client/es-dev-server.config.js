const proxy = require('koa-proxies');

module.exports = {
  port: 3000,
  watch: true,
  nodeResolve: true,
  open: true,
  appIndex: 'index.html',
  middlewares: [
    proxy('/api', {
      target: 'http://localhost:3001',
    }),
  ],
  moduleDirs: ['node_modules']
};
