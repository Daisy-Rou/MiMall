<template>
    <div class="index">
        <div class="container">
            <!-- 轮播 -->
            <div class="swiper-box">
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
    .index {
        .swiper-box {
            .swiper-container {
                height: 451px;
                img {
                     width: 100%;
                     height: 100%;
                }
            }
        }
    }
</style>