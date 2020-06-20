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
                    <a href="javascript:;">登陆</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart">
                        <span class="icon-cart"></span>
                    购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header"></div>
    </div>
</template>
<script>
export default {
    name:'nav-header'
}
</script>
<style lang="scss">
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container {
            width: 1226px;
            margin-right: auto;
            margin-left: auto;
            // flex布局 可以使布局 两边对齐 中间居中
            display: flex;
            //水平方向居中
            justify-content: space-between;
            //垂直方向居中
            align-items: center;
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
                    //只有设置了 span 宽高 图片才能显示出来
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    //sapn 标签的 背景图片
                    background: url('/imgs/icon-cart-checked.png') no-repeat center;
                    //背景填满
                    background-size: contain;
                    margin-right: 4px;
                }
            }
        }
        }
                
    }
</style>