const configBase = require('./config.base')
module.exports = {
  ...configBase,

  app: {
    // 配置不同环境使用的配置，详见： drip.jd.com/docs/base/统一配置
    jnpmUrl: '//npm.m.jd.com',
    urlRegistryDomain: 'http://registry.m.jd.com', // 示例的后端请求接口
  },
  publicPath: './',

  analyze: {
    // 启动构建分析
    defaultSizes: 'gzip', // 网络按照gzip传输，所以使用gzip
  },
}
