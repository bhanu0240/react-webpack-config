const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        path: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        runtimeChunk: "single"
    }
}