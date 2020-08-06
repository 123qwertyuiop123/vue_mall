// 跨域
module.exports = {
  // devServer: {
  //     proxy: 'http://localhost:4000'
  // }
  assetsDir: './',
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 重写接口 后台接口指向不统一  所以指向所有/
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
