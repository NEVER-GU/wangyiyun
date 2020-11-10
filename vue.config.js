const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('static', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', 'src/views')
  }
}
