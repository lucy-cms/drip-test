// 开发配置

const configBase = require('./config.base')
module.exports = {
  ...configBase,

  app: {
    // 配置不同环境使用的配置，详见： drip.jd.com/docs/base/统一配置
    jnpmUrl: '//beta-npm.m.jd.com',
    urlRegistryDomain: '/registry', // 示例的后端请求接口, 本地用代理，所以设为空
  },

  mock: true, // 开启mock服务

  proxy: {
    // 跨域代理等问题，详见：drip.jd.com/docs/query/跨域和代理
    '/registry': {
      target: 'http://registry.m.jd.com',
      changeOrigin: true,
      pathRewrite: { '^/registry.': '' },
    },
  },

  // 设置本地host，避免cookie跨域
  // 同时需要绑定host: `127.0.0.1 local.m.jd.com`
  // host: 'local.m.jd.com',

  // 设置端口号
  // port: 80
}
