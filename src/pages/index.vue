<template>
    <div class="index">
        <div class="container">
            <!-- 轮播 -->
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电池 盒子</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList2" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList1" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
            <div class="ads-box">
                <a :href="'/#/product/'+item.id" v-for="(item, index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <!-- banner -->
            <div class="banner">
                <a href="/#/product/30" >
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <!-- 商品列表 -->
            <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img src="/imgs/mix-alpha.jpg" alt="">
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(item, index) in phoneList" :key="index">
                                <div class="item" v-for="(arr, index) in item" :key="index">
                                    <span>新品</span>
                                    <div class="item-img">
                                        <img src="" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>小米9</h3>
                                        <p>骁龙855,索尼4800万超广角微距</p>
                                        <p class="price">2999元</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                ],
                menuList1: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList2: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds1.jpg',
                            name: 'Redmi智能电视 '
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds2.jpg',
                            name: '小米全面屏电视E65A'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds3.jpg',
                            name: '小米全面屏电视E55A'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds4.jpg',
                            name: '小米全面屏电视E55C'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds5.jpg',
                            name: '小米全面屏电视E55X'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds6.jpg',
                            name: '小米全面屏电视E32A'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds7.jpg',
                            name: '小米全面屏电视E43K'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds8.jpg',
                            name: '小米全面屏电视E43X'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds9.jpg',
                            name: '小米全面屏电视E40A'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds10.jpg',
                            name: '小米全面屏电视E43C'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds11.jpg',
                            name: '小米全面屏电视E32C'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds12.jpg',
                            name: '小米全面屏电视E43A'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds13.jpg',
                            name: '全面屏电视ProE32S'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds14.jpg',
                            name: '全面屏电视ProE43S'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds1.jpg',
                            name: '小米电视5'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds2.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds3.jpg',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds4.jpg',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds5.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds6.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-ds7.jpg',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-ds8.jpg',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-ds9.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-ds10.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList3: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList4: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList5: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList6: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList7: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                menuList8: [
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ],
                    [
                        {
                            id: 30,
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9'
                        },
                        {
                            id: 31,
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版'
                        },
                        {
                            id: 32,
                            img: '/imgs/item-box-3.jpg',
                            name: 'Readmi K20 Pro'
                        },
                        {
                            id: 33,
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G专区'
                        }
                    ]
                ],
                adsList: [
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.png'
                    },
                    {
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg'
                    },
                    {
                        id: 45,
                        img: '/imgs/ads/ads-3.png'
                    },
                    {
                        id: 47,
                        img: '/imgs/ads/ads-4.jpg'
                    }
                ],
                phoneList: [[1,1,1,1],[1,1,1,1]]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/base.scss';
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
                            .children {
                                display: block;
                            }
                        }
                        .children {
                            display: none;
                            background-color: #ffffff;
                            width: 962px;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid #e5e5e5;
                            ul {
                                display: flex;
                                justify-content: space-between;
                                height: 75px;
                                li {
                                    height: 75px;
                                    line-height: 75px;
                                    width: 241px;
                                    padding-left: 23px;
                                }
                                a {
                                    color: #333333;
                                    font-size: 14px;                                }
                                img {
                                    width: 42px;
                                    height: 42px;
                                    //图片和文字居中
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
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
        .ads-box {
            display: flex;
            justify-content: space-between;
            margin-top: 14px;
            margin-bottom: 31px;
            a {
                width: 296px;
                height: 167px;
            }
        }
        .banner {
            margin-bottom: 50px;
        }
        .product-box {
            background-color: #f5f5f5;
            padding: 30px 0 50px;
            h2 {
                font-size: 22px;
                height: 21px;
                line-height: 21px;
                color: #333333;
                margin-bottom: 20px;
            }
            .wrapper {
                display: flex;
                .banner-left {
                    margin-right: 16px;
                    img {
                        width: 224px;
                        height: 619px;
                    }
                }
                .list-box {
                    .list {
                        display: flex;
                        justify-content: space-between;
                        width: 986px;
                        margin-bottom: 14px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                        .item {
                            width: 236px;
                            height: 302px;
                            background-color: #ffffff;
                            text-align: center;
                            span {

                            }
                            .item-img {
                               img {
                                height: 195px;
                               }
                            }
                            .item-info {
                                h3 {
                                    color: #333333;
                                    font-size: 14px;
                                    line-height: 14px;
                                    font-weight: bold;
                                }
                                p {
                                    color: #999999;
                                    line-height: 13px;
                                    margin: 6px auto 13px;
                                }
                                .price {
                                    color: #f20a0a;
                                    font-size: 14px;
                                    font-weight: bold;
                                    cursor: pointer;
                                    &:after {
                                        @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                                        content: '';
                                        margin-left: 5px;
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>