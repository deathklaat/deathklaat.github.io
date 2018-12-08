// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// return array of configurations
module.exports = env => {
    const mainConfigProd = {
        devtool: 'inline-source-map',
        optimization: {
            minimize: false
        },
        resolve: {
            modules: ['node_modules']
        },
        name: 'main',
        entry: {main: './src/index.js'},
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/main.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                import: true,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: ['file-loader?name=img/[name].[ext]']
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin('dist', {}),
            new MiniCssExtractPlugin({
                filename: 'css/main.css',
            }),
            new CopyWebpackPlugin([
                {from: 'src/img', to: 'img'}
            ]),
            new EncodingPlugin({
                encoding: 'win1251'
            }),
            new CleanTerminalPlugin()
        ]
    };

    return [mainConfigProd];
};
