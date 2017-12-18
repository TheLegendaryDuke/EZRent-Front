var config = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    plugins: ["transform-class-properties"],
                    presets: ['stage-0', 'react', 'env']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
                use: 'file-loader?name=[name].[ext]?[hash]'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
            }
        ]
    }
}

module.exports = config;