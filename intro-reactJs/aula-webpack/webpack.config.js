const path = require('path');  //pega o diretorio padrão 
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    mode: "production",
    entry: './src/index.js',
    output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js',
},

performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

module: {
    rules:[
        {
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
},

plugins:[
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
  })
  ]
}
