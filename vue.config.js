const autoprefixer = require('autoprefixer'); //rem适配
const pxtorem = require('postcss-pxtorem'); //rem适配

module.exports = {
    devServer: {
      port: 8000, // 端口号，如果端口号被占用，会自动提升1
      host: "192.168.100.5", //主机名， 127.0.0.1， 真机 0.0.0.0
      https: false, //协议
      open: true, //启动服务时自动打开浏览器访问
    },
    lintOnSave: false, // 关闭格式检查
    publicPath:'./', // 打包时基本路径
    outputDir: 'dist', // 打包时输出文件目录
    productionSourceMap: false, // 打包时不会生成 .map 文件，加快打包速度
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtorem({
                rootValue: 192,
                propList: ['*'],
                // 该项仅在使用 Circle 组件时需要
                // 原因参见 https://github.com/youzan/vant/issues/1948
                selectorBlackList: ['van-circle__layer']
              })
            ]
          },
            sass: {
              prependData: `@import "@/assets/scss/public.scss";` //全局公共样式
            }
        },
        
      },
};