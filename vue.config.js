//webpack的配置表
module.exports = {
    devServer: {
        host:'localhost',
        port: 8080,
        proxy:{
            '/activity': {
                target:'https://www.imooc.com',
                changeOrigin:false,
                pathRewrite: {
                    '/activity':'/activity'
                }
            }
        }
    }
}