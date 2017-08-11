const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/dist'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                            // outputStyle: 'compressed'
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/index.css'
        }),
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: './src/index.html'
            })
    ]
};