const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js",
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'app.css', allChunks: true })
    ],
}