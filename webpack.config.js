var config = {
    entry: './src/index.js',

    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 3000
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
            }
        ]
    }
}

module.exports = config;