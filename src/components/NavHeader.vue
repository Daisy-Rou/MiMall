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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart">
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
                        <span>小米手机</span>
                        <div class="children">

                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                            
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            
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
    name:'nav-header'
}
</script>
<style lang="scss">
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
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