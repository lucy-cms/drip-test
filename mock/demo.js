const makeMyMock = require('./_utils').makeMyMock

module.exports = {
  'POST /registry/updateModules': makeMyMock({
    success: false,
  }),

  'GET n/registry/-/search': makeMyMock({
    data: {
      'modules|10': [
        // 生成有10个元素的数组
        {
          name: '@@word()/@word()', // 随机单词
          description: '@sentence',
          'download|1-10000': 50, // 1-100的随机数
          version: '@integer(0,10).@integer(0,10).@integer(0,10)', // 随机正整数
        },
      ],
      pageSize: 10,
      total: 100,
      currentPage: 1,
    },
  }),
}
