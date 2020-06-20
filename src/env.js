let baseURL;

//根据不同的环境输出不同的 url 地址
//process.env获取 当前nodejs 进程里面的 环境变量 最终写入 nodejs中 （因为我们本身的项目就是在nodejs里面运行的）
switch (process.env.NODE_ENV) {
    //开发环境
    case 'development':
        //后台真实地址
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    //测试环境
    case 'test':
        //后台真实地址
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    //运行环境
    case 'production':
        //后台真实地址
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURL
}