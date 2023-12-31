const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hush].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
        }),
    ],
    devServer: {
        static: './public', 
        https: false,
        // 瀏覽器可取得歷史紀錄，返回上一頁不會跳出 404
        historyApiFallback: true, 
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(?:js|mjs|cjs|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
              }
            }
          }
        ],
    },
};