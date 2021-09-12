const path = require('path');
const webpack = require('webpack');

module.exports = {
 mode: 'development',
 entry:{
     react: ['react','react-dom'],
 },
 output:{
     filename: '_dll_[name].js',
     path: path.resolve(__dirname,'src'),
     library: '_dll_[name]',
    //  libraryTarget:'var'
 },
 plugins:[
     //单独打包 react,react-dom，动态链接库
     new webpack.DllPlugin({
        name:'_dll_[name]',
        path:path.resolve(__dirname,'src','manifest.json')
     }),
 ]
}