<template>
    <div class="index">
        <div class="container">
            <!-- 轮播 -->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电池 盒子</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children"></div>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in sliderList" :key="index">
                        <a :href="'/#/product/' + item.id">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <!-- 广告 -->
            <div class="ads-box"></div>
            <!-- banner -->
            <div class="banner"></div>
            <!-- 商品列表 -->
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    //运用结构语法 不需要导入整个
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    //会自动到 node_module模块去找 css样式
    import 'swiper/css/swiper.css'
    export default {
        name:'index',
        components:{
            Swiper,
            SwiperSlide,
            ServiceBar
        },
        data() {
            return {
                swiperOption: {
                    //自动播放
                    autoplay: true,
                    //循环播放
                    loop: true,
                    //动画效果
                    effect : 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    // effect : 'cube',
                    // cubeEffect: {
                    //     slideShadows: true,
                    //     shadow: true,
                    //     shadowOffset: 100,
                    //     shadowScale: 0.6
                    // },
                    //分页图标
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true
                    },
                    //前后按钮点击
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                sliderList: [
                    {
                        id: '42',
                        img: '/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '45',
                        img: '/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '46',
                        img: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '47',
                        img: '/imgs/slider/slide-4.jpg'
                    },
                    {
                        id: '48',
                        img: '/imgs/slider/slide-5.jpg'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .index {
        .swiper-box {
            .nav-menu {
                //盒模型
                box-sizing: border-box;
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: rgba(0, 0, 0, 0.25);
                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            display: block;
                            color: #ffffff;
                            font-size: 16px;
                            padding-left: 30px;
                            &:after {
                                position: absolute;
                                content: '';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                                right: 30px;
                                top: 17.5px;
                            }
                        }
                        &:hover {
                            background-color: #ff6600;
                        }
                    }
                }
            }
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 274px;
                }
                img {
                     width: 100%;
                     height: 100%;
                }
            }
        }
    }
</style>