<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;">Daisy柔</a><span>|</span>
            <a href="javascript:;">Vue全栈</a><span>|</span>
            <a href="javascript:;">React全家桶</a><span>|</span>
            <a href="javascript:;">Nodejs</a><span>|</span>
            <a href="javascript:;">微信支付宝</a>
        </div>
        <div class="copyright">
            Copyright @2020 <span class="domain">mi.daisyrou.com</span> All Right Reserved
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss" scoped>
    .footer {
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            p{
                &:hover {
                    color: #ff6600;
                }
            }
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            margin-bottom: 13px;
            a {
                display: inline-block;
                color: #999999;
                &:hover {
                    color: #ff6600;
                }
            }
            span {
                margin: 0 40px;
            }
        }
        .copyright {
            .domain {
                color: #ff6600;
            }
        }
    }
</style>