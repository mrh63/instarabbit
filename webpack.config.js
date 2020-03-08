const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("dotenv").config();
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {

    const devMode = env !== 'production';
    
    return {
        entry: ['@babel/polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        plugins: [
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
          }),
          new Dotenv({
            path: path.join(__dirname, ".env"),
            systemvars: true
          })
        ],
        module: {
          rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          },{
              test: /\.(sa|sc|c)ss$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: env === 'development',
                  },
                },
                'css-loader',
                'sass-loader',
              ],
            }
          ],
        },
        devtool: !devMode ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/'
        },
    };
};
