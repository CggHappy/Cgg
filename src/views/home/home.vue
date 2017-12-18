<template>
    <div class="home">
        <header class='header'>
            <span class='left'><img src="../../assets/img/top.png" alt=""></span>
            <form>
                <span class="icon iconfont icon-search"></span>
                <router-link :to="{name: 'search'}"><input type="text" placeholder="请输入您要购买的东西"></router-link> 
            </form>
            <div class='right'>
                <span class='icon iconfont icon-home'></span>
                <p>我的店铺</p>
            </div>
        </header>
        <section class="section" ref="main" @scroll = "UpdateGoodsList">
            <div class="swiper-container" ref="scroller">
                <div class="swiper-wrapper wrapper-img">
                    <div class="swiper-slide"><img src="../../assets/img/b1.png" alt=""> </div>
                    <div class="swiper-slide"><img src="../../assets/img/b2.png" alt=""> </div>
                    <div class="swiper-slide"><img src="../../assets/img/b3.png" alt=""> </div>
                    <div class="swiper-slide"><img src="../../assets/img/b4.png" alt=""> </div>

                </div>
                <div class="swiper-pagination swiperpage"></div>
            </div>
            <ul class="home-nav">
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav1.png" alt=""><span>家乡味道</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav2.png" alt=""><span>进口食品</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav3.png" alt=""><span>牛奶乳品</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav4.png" alt=""><span>茶果冲饮</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav5.png" alt=""><span>休闲零食</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav6.png" alt=""><span>米面粮油</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav7.png" alt=""><span>调味调料</span></li>
                <li><img src="http://www.lb717.com/static/mobile/images/homeImg/nav8.png" alt=""><span>酒水饮料</span></li>
            </ul>
            <div class="mall-dynamic">
                <p>商城</br>动态</p>
                <div class="dynamic-content">
                    <span>717商城社区服务功能正式上线！</span>
                </div>
            </div>
            <div class="preferential">
                <span>
                <i><img src="http://www.lb717.com/static/mobile/images/homeImg/todayimg.png"></i>
                <label>天天特惠</label>
                <small>每天有惊喜</small>
                </span>
                <p>
                    <a href="">更多<img src="http://www.lb717.com/static/mobile/images/homeImg/dayreturn.png"></a>
                </p>
            </div>
            <div class="special">
                <div class="special-left">
                    <a><img src="http://www.lb717.com/static/mobile/images/homeImg/home1.png"></a>
                </div>
                <div class="special-right">
                    <div class="special-right-top">
                        <a><img src="http://www.lb717.com/static/mobile/images/homeImg/ruwei.png"></a>
                    </div>
                    <div class="special-right-bottom">
                        <a><img src="http://www.lb717.com/static/mobile/images/homeImg/gaodian.png"></a>
                    </div>
                </div>
            </div>
            <div class="hometown">
                <img class="img1" src="http://www.lb717.com/static/mobile/images/homeImg/1.png" alt="">
                <label><img src="http://www.lb717.com/static/mobile/images/homeImg/homelandlogo.png">
                    <span>家乡味道</span>
                </label>
                <img class="img2" src="http://www.lb717.com/static/mobile/images/homeImg/1.png" alt="">
                <p><a href="">更多<img src="http://www.lb717.com/static/mobile/images/homeImg/dayreturn.png"></a></p>
            </div>
            <div class="goods">
                <homefood v-for="(v, k) in goodslist" :key="k" :val="v"></homefood>
            </div>
            
        </section>
    </div>
</template>
<script>
    import homefood from './homegood.vue'
    import Swiper from "swiper";
    export default {
        name: "home",
        data() {
            return {
                channel_id: 2,
                goodslist: []
            }
        },
        mounted: function () {
            new Swiper(".swiper-container", {
                loop: true,
                autoplay: true,
                pagination: ".swiperpage",
                paginationClickable: true
            });
        },
        created: function () {
            this.queryGoodsList();
        },
        methods: {
            // 请求数据
            queryGoodsList: function () {
                this.$http.post('/mall/index/getGoodsChannel', {
                    channel_id: this.channel_id
                }).then((res) => {
                    // console.log(res)
                    this.goodslist = this.goodslist.concat(res.data.data.data);
                })
            },
            // 下拉刷新
            UpdateGoodsList() {
                var scroller = this.$refs.scroller.offsetHeight;
                var main = this.$refs.main;
                var mainHeight = main.offsetHeight;
                var scrollTop = main.scrollTop;
                if(scroller - mainHeight - scrollTop < 30) {
                    // console.log('接近底部');
                    this.channel_id++;
                    this.queryGoodsList();
                }
            }
        },
        components: {
            homefood
        }
    };

</script>
<style scoped src="./home.css">
    
</style>