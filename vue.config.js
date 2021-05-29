/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Saturday, May 29th 2021, 2:49:22 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2021 瑞为
 */


const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    outputDir: 'dist',
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('img', resolve('src/assets/img'))
            .set('comp', resolve('src/components'))
            .set('view', resolve('src/views'))
    },

    configureWebpack: {
        resolve: {
            alias: {
                'Vue': 'Vue',
                'core-js': 'core-js',
                'vue-router': 'vue-router',
                'vuex': 'vuex'
            }

        }

    }
}