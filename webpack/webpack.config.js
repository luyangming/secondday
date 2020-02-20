const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const output = require("./webpack.output.js");
const webpack=require('webpack');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    // 入口文件 
    entry: "./src/index.js",
    // 出口文件 打包到哪
    output:output,
    // output: {
    //     filename: "bundle.js",
    //     // path是绝对路径 
    //     path: path.resolve(__dirname, "dist")
    // },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                         outputPath:'images/',
                         limit:100,
                         name:'[name].[ext]'
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
             {
                  test:/\.js$/,
                  loader:"babel-loader",
                  options:{
                    presets:["@babel/preset-env"]
                  },
                  exclude: /node_modules/
             }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin("唯创所有")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:'localhost',
        // open:true
    }
}