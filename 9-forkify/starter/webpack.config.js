const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

/*
You will also need to change the entry in webpack.config.js from this:

    entry: ['babel-polyfill', './src/js/index.js'],

to this:

    entry: ['@babel/polyfill', './src/js/index.js'],

and the the code in .babelrc from this:

    {
        "presets": [
            ["env", {
                "targets": {
                    "browsers": [
                        "last 5 versions",
                        "ie >= 8"
                    ]
                }
            }]
        ]
    }

to this:

    {
        "presets": [
            ["@babel/env", {
                "targets": {
                    "browsers": [
                        "last 5 versions",
                        "ie >= 8"
                    ]
                }
            }]
        ]
    }
*/