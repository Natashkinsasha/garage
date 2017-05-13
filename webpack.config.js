var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {

    entry: path.join(__dirname, 'src/main.js'),

    output: {
        path: path.join(__dirname, '/public/build'),
        publicPath: "/build",
        filename: "bundle.js"
    },


    devtool: NODE_ENV=='devlopment' ? 'source-map' : false,

    plugins:[
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],

            },
            {
                test: /\.jsx$/,
                loader: "react-hot-loader!babel-loader",
                exclude: [/node_modules/, /public/],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        port: 8000,
        proxy: {
            '/api/**': {
                target: 'http://localhost:3001',
                secure: false,
                changeOrigin: true,
            },
        },
        historyApiFallback: true
    },
}