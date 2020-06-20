//webpack的配置表
module.exports = {
    devServer: {
        host:'localhost',
        port: 8080,
        proxy:{
            //添加接口代理
            '/api': {
                target:'https://www.imooc.com',
                changeOrigin:true,
                pathRewrite: {
                    '/api':''
                }
            }
        }
    }
}