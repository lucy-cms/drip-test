// 预发配置

const configProduction = require('./config.production')
module.exports = {
  ...configProduction,
  app: {
    // 配置不同环境使用的配置，详见： drip.jd.com/docs/base/统一配置
    jnpmUrl: '//beta-npm.m.jd.com',
    urlRegistryDomain: 'http://registry.m.jd.com', // 示例的后端请求接口
  },
  // 设置发布CDN的选项，详见： drip.jd.com/docs/deploy/预发环境部署
  // jss: {
  //   accessKey: '',
  //   secretKey: '',
  //   application: '',
  //   bucket: '',
  //   prefix: '',
  //   branch: '',
  //   auto: true,
  // },
}
