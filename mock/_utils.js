// mock类的工具

const makeMock = require('@drip/drip-scripts').makeMock

const makeMyMock = makeMock.create((data, req, res) => {
  return {
    status: 200,
    message: '',
    ...data,
    ok: 'true',
  }
}, 500) // 设置500ms延迟

module.exports = {
  makeMyMock,
}
