module.exports = {
    publicPath: '',
    outputDir: 'dist', // 打包的目录
    assetsDir: 'static', // 打包静态资源的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
    chainWebpack: config => {
        // 压缩代码
        config.optimization.minimize(true)
            // 分割代码
        config.optimization.splitChunks({
                chunks: 'all'
            })
            // 用cdn方式引入
        config.externals({
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        })
    }
}