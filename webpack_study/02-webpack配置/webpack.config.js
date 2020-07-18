const path = require("path")

module.exports = {
  entry:'./src/main.js',
  output:{
    // 使用动态获取的方式 使用node语法
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
}