const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'main': path.join(__dirname, 'src/main.js'),
        'quiz': path.join(__dirname, 'src/quiz.js'),
        'results': path.join(__dirname, 'src/results.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: '[name]-[hash][ext]',
        clean: true,
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        compress: true,
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.(mp3)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, './pages/quiz.html'),
            filename: 'pages/quiz.html',
            chunks: ['quiz'],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, './pages/results.html'),
            filename: 'pages/results.html',
            chunks: ['results'],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
};