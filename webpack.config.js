const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ["./src/LadderExecutor.js"]
  },
  output: {
    filename: "./bundle.js",
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      { test: /\.g4/, loader: 'antlr4-webpack-loader' }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  node: {
    fs: "empty"
  }
};
