const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./entry');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode:'development',//production上线 js文件压缩
    entry: entry,
    output:{
        path:path.resolve(__dirname,'dist'), 
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[{
                        loader: "css-loader",
                        options:{importLoaders: 1}
                        },'postcss-loader']
                  })
            },{
                test:/\.(jpg|png|git)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.(htm|html)/i,
                use:['html-withimg-loader']
            },{
                test:/\.scss$/,
                //use:['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    use:['css-loader','sass-loader'],
                    fallback:'style-loader',
                })
            },{
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            //压缩 
            minify:{
                removeAttributeQuotes:true
            },
            template:'./src/index.html',
            hash:true,
        }),
        new ExtractTextPlugin("index.css"),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
          }),
        new webpack.BannerPlugin('翻版必究'),
        new CopyWebpackPlugin([{
            from:'./src/public',
            to:'public'
        }]),
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true
    }
}
