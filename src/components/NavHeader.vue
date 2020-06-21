<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <!-- javascript:;不会刷新页面 -->
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <!-- v-on 事件绑定 也可以简写 @click -->
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>
                    购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <!-- 数据渲染 -->
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <!-- 加:key 渲染速度更高 复用率更高 不会重复渲染 -->
                                <li class="product" v-for="(item, index) in phoneList" :key="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>        
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-2.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-4.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-5.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-2.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-4.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-5.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="pro-name">小米cc9</div>
                                        <div class="pro-price">￥1799元</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    //交互
    data() {
        return {
            phoneList: [],
            username: ''
        }
    },
    //过滤器
    filters: {
        currency(val) {
            if(!val) return 0.00;
            //toFixed(2) 小数点后两位
            return '￥' + val.toFixed(2) + '元'
        }
    },
    mounted() {
        this.getProductList()
    },
    methods: {
        //登录
        login() {
            this.$router.push('/login')
        },
        //小米手机数据请求
        getProductList() {
            this.axios.get('/products', {
                //get请求传参方式 使用 params 与 post 不同
                params: {
                    categoryId:'100012',
                    pageSize: 6
                }
            }).then((res) => {
                //当获取的长度大于 6 时截取 6条数据
                if(res.list.length > 6) {
                    this.phoneList = res.list.slice(0,6)
                }
            })
        },
        goToCart() {
            //路由跳转 this.$router.push()  取参 router.query 或者 router.params
            this.$router.push('/cart')
        }
    }
}
</script>
<style lang="scss">
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/config.scss';
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container {
                
                // // flex布局 可以使布局 两边对齐 中间居中
                // display: flex;
                // //水平方向居中
                // justify-content: space-between;
                // //垂直方向居中
                // align-items: center;
                @include flex();
                a{
                        //html标签元素主要包括 inline内联元素 block块元素
                        //inline-block 像内联元素 但具有 宽度和高度 img input 就是这种内联块级元素
                        display: inline-block;
                        color: #b0b0b0;
                        margin-right: 17px;
                }
                .my-cart {
                    width: 110px;
                    background-color: #ff6600;
                    text-align: center;
                    color: #ffffff;
                    .icon-cart {
                        @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
                        //只有设置了 span 宽高 图片才能显示出来
                        // display: inline-block;
                        // width: 16px;
                        // height: 12px;
                        // //sapn 标签的 背景图片
                        // background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        // //背景填满
                        // background-size: contain;
                        margin-right: 4px;
                    }       
                }
            }   
        }
        .nav-header {
           .container {
               position: relative;
               height: 112px;
            //    display: flex;
            //    //水平两端对齐
            //    justify-content: space-between;
            //    //垂直居中
            //    align-items: center;
            @include flex();
               .header-logo {
                   display: inline-block;
                   width: 55px;
                   height: 55px;
                   background-color: #ff6600;
                   //通过before after 伪类  设置两张图片
                   a {
                       display: inline-block;
                       width: 110px;
                       height: 55px;
                       &:before {
                           //占位
                           content: '';
                            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
                        //    display: inline-block;
                            //    width: 55px;
                            //    height: 55px;
                            //    background: url('/imgs/mi-logo.png') no-repeat center;
                            //    background-size: 55px;
                           transition: margin .2s;
                       }
                       &:after {
                           //占位
                           content: '';
                           @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
                        //    display: inline-block;
                        //    width: 55px;
                        //    height: 55px;
                        //    background: url('/imgs/mi-home.png') no-repeat center;
                        //    background-size: 55px;
                       }
                       &:hover:before {
                           margin-left: -55px;
                           //掌握 css3 transition transform animation 语法
                           transition: margin .2s;
                       }
                   }
               }
               .header-menu {
                   display: inline-block;
                   padding-left: 209px;
                   width: 643px;
                   .item-menu {
                       display: inline-block;
                       color: #333333;
                       font-weight: bold;
                       font-size: 16px;
                       line-height: 112px;
                       margin-right: 20px;
                       span {
                           cursor: pointer;
                       } 
                       &:hover {
                           color: $colorA;
                           .children {
                               height: 220px;
                               //当鼠标移到 小米手机 展示 下拉图片
                               opacity: 1;
                           }
                       }
                       .children {
                           position: absolute;
                           top: 142px;
                           left: 0;
                           width: 1226px;
                           height: 0px;
                           //下拉图片透明度为0
                           opacity: 0;
                           //隐藏下拉图片
                           overflow: hidden;
                           border-top: 1px solid #e5e5e5;
                           box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                           z-index: 10;
                           transition: all .5s;
                           background-color: #ffffff;
                           .product {
                               position: relative;
                               float: left;
                               width: 16.6%;
                               height: 220px;
                               font-size: 12px;
                               line-height: 12px;
                               text-align: center;
                               a {
                                   display: inline-block;
                               }
                               img {
                                   width: auto;
                                   height: 111px;
                                   margin-top: 26px;
                               }
                               .pro-img {
                                   height: 137px;
                               }
                               .pro-name {
                                   font-weight: bold;
                                   margin-top: 19px;
                                   margin-bottom: 12px;
                                   color: #333333;
                               }
                               .pro-price {
                                   color: #ff6600;
                               }
                                //加伪类 做绝对定位
                                &:before {
                                    content: '';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid #d7d7d7 ;
                                    height: 110px;
                                    width: 1px;
                                }
                                //最后一个竖线不要
                                &:last-child:before {
                                    display: none;
                                }
                           }
                       }
                   }
               }
               .header-search {
                   width: 319px;
                   .wrapper {
                       height: 50px;
                       border: 1px solid #e0e0e0;
                       display: flex;
                       align-items: center;
                       input {
                            border: none;
                            //盒模型 是宽度固定为 264px padding不单独算
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 48px;
                            padding-left: 14px;
                       }
                       a {
                           @include bgImg(18px, 18px, '/imgs/icon-search.png');
                        //    display: inline-block;
                        //    width: 18px;
                        //    height: 18px;
                        //    background: url('/imgs/icon-search.png') no-repeat center;
                        //    //让背景图片充满元素
                        //    background-size: contain;
                           margin-left: 17px;
                       }
                   }
               }
           } 
        }
    }
</style>