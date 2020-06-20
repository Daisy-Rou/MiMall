//定义 mock 文件
import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status":0,
    "data" : {
        "id|1001-1110": 0,
        "username": "@cname",
        "email": "@email",
        "phone|11111111111-19999999999": 0,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
})