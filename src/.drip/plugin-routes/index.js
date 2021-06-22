const getPages = () => {
  let contexts = false
  let pages = []
  let page404 = null
  let pageIndexs = []

  try {
    // https://webpack.js.org/api/module-methods/#requirecontext
    contexts = require.context('pages/', true, /\index.(jsx|tsx)$/) // 'lazy'
  } catch (e) {
    return pages
  }

  contexts.keys().map((pageKey) => {
    let isIndex = false
    let keyArr = pageKey.split('/')
    keyArr.shift() // 移除.
    keyArr.pop() // 移除index.jsx

    // 如果文件夹名是index，按照index处理
    if (keyArr[keyArr.length - 1] === 'index') {
      keyArr.pop()
      isIndex = true
    }

    const path = '/' + keyArr.join('/')

    const pageInfo = {
      page: pageKey,
      path: path,
      Component: contexts(pageKey),
    }

    // 404 页面需要加到路由最后面
    if (path === '/404') {
      page404 = pageInfo
      pageInfo.path = '/*'
      // index页面也需放再路由最后面
    } else if (isIndex) {
      pageIndexs.push(pageInfo)
    } else {
      pages.push(pageInfo)
    }
  })

  pageIndexs.map((page) => {
    pages.push(page)
  })

  if (page404) {
    page404 = {
      ...page404,
    }
    pages.push(page404)
  }

  return pages
}

export { getPages }
