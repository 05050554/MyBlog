const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  }, module:{
    rules:[{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
    },
{
    test:/.(png)$/,
    use:['url-loader']
}
]
},
};