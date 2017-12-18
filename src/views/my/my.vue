<template>
    <div class="content">
        <header class="header">
            <img src="http://www.lb717.com/static/mobile/images/myimg/my1.png" alt="">
            <h1>我的717商城</h1>
        </header>
        <section class="section">
            <div class="information">
                <img src="http://www.lb717.com/static/mobile/images/default_avatar.png" alt="">
                <span>{{$store.state.userName}}</span>
            </div>
            <div class="paymentBox">
                <h3>
                    <label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my9.png" alt="">
                        <span>我的店铺</span>
                    </label>
                    <label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my14.png" alt="">
                    </label>
                </h3>
                <ul>
                    <li>
                        <a href="">
                            <i>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my4.png" alt="">
                            </i>
                            <span>待付款</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my5.png" alt="">
                            </i>
                            <span>待发货</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my6.png" alt="">
                            </i>
                            <span>待收货</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my7.png" alt="">
                            </i>
                            <span>售后</span>
                        </a>
                    </li>
                    <li id="imgLi">
                        <a href="">
                            <i>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my8.png" alt="">
                            </i>
                            <span>
                                <b>代付款</b>
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="">
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="manageBox">
                <ol>
                    <li>
                        <span>
                            <img src="http://www.lb717.com/static/mobile/images/myimg/myhome.png" alt="">
                            <b>我的社区</b>
                        </span>
                        <span><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></span>
                    </li>
                    <li>
                        <span>
                            <img src="http://www.lb717.com/static/mobile/images/myimg/my10.png" alt="">
                            <b>账户余额</b>
                        </span>
                        <span><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></span>
                    </li>
                    <li @click="go_to_location">
                        <span>
                            <img src="http://www.lb717.com/static/mobile/images/myimg/my12.png" alt="">
                            <b>地址管理</b>
                        </span>
                        <span><img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></span>
                    </li>
                </ol>
            </div>
            <div class="recommend">
                <img src="http://www.lb717.com/static/mobile/images/myimg/my16.png" alt="">
                <span>热门推荐</span>
                <img src="http://www.lb717.com/static/mobile/images/myimg/my17.png" alt="">
            </div>
            <div class="mygroomlrt">
                <dl>
                    <dt>
                        <img src="http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/13247/2017-03/huge/3401896057.jpg" alt="">
                    </dt>
                    <dd>
                        <p>安徽特产 胡玉美七味辣米虾 虾米酱 淡水米虾酱 超下饭 烹饪绝配  200g</p>
                        <p>
                            <span>￥<label>7.00</label></span>    
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com//Uploads/images/home/storegoodsupload/release/1418/2017-03/huge/1448782288.jpg" alt="">
                    </dt>
                    <dd>
                        <p>安徽特产 胡玉美七味辣米虾 虾米酱 淡水米虾酱 超下饭 烹饪绝配  200g</p>
                        <p>
                            <span>￥<label>7.00</label></span>    
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/4ba6e17a10392998bd8fd3807b2c7faae1d51bd7.jpg" alt="">
                    </dt>
                    <dd>
                        <p>安徽特产 胡玉美七味辣米虾 虾米酱 淡水米虾酱 超下饭 烹饪绝配  200g</p>
                        <p>
                            <span>￥<label>7.00</label></span>    
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="">
                        </p>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <img src="http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/a6333434d30a1b79975f6d7f74bfa58d76f8420b.jpg" alt="">
                    </dt>
                    <dd>
                        <p>安徽特产 胡玉美七味辣米虾 虾米酱 淡水米虾酱 超下饭 烹饪绝配  200g</p>
                        <p>
                            <span>￥<label>7.00</label></span>    
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png" alt="">
                        </p>
                    </dd>
                </dl>
            </div>
            <div class="bottom">到底了哦！...</div>
        </section>
        

    </div>
</template>
<script>
    export default{
      name: 'my',
      methods: {
          go_to_location(){
              this.$router.push({name: 'address'})
          }
      }
    }
</script>
<style scoped src="./my.css"></style>