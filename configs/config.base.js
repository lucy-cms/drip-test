// const path = require('path')

module.exports = {
  alias: {}, // 设置别名

  useDripApp: true, // 请一定设置useDripApp为true，

  skipPreflightCheck: true, // babel、jest的版本依赖可能不一致时，请设为true,

  // 如果需要用less，请开启此选项
  // less: {
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: {},
  //   },
  // },
  // alias: {
  //   // react: path.resolve(__dirname, '../../../../../node_modules/react'),
  //   // recoil: path.resolve(__dirname, '../../../../../node_modules/recoil'),
  //   react: path.resolve(__dirname, '../node_modules/react'),
  //   recoil: path.resolve(__dirname, '../node_modules/recoil'),
  // }
}
