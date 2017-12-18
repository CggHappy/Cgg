<template>
  <div class="wrap">
      <keep-alive include="index"><router-view class="container"></router-view></keep-alive>
      <div class="footer">
          <ul>
                <router-link :to="{name:'home'}" :tag="'li'">
                    <i class='icon iconfont icon-shouye'></i>
                    <span>首页</span>
                </router-link>
                <router-link :to="{name: 'catatory'}" :tag="'li'">
                    <i class='icon iconfont icon-icon'></i>
                    <span>分类</span>
                </router-link>
                <router-link :to="{name: 'shopping'}" :tag="'li'">
                    <i class='icon iconfont icon-gouwuchekong'></i>
                    <span>购物车</span>
                    <em class="e">{{$store.state.cart_list.length}}</em>
                </router-link>
                <router-link :to="{name: 'my'}" :tag="'li'">
                    <i class='icon iconfont icon-home1'></i>
                    <span>我的</span>
                </router-link>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style scoped>
    .wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .container{
        flex:1;
        width: 100%;
        overflow: auto;
    }
    .footer, ul{
        width: 100%;
        flex-shrink: 0;
        height: .9rem;
        border-top:1px solid #eee; 
    }
    ul{
        display: flex;
    }
    ul li{
        flex:1;
        text-align: center;
    }
    .router-link-active{
        color:#fc4141;
    }
    ul li i, ul li span{
        display: block;
        height: 50%;
    }
    a{
        position: relative;
    }
    .e{
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        background: #f00;
        color:#fff;
        border-radius: 50%;
        display: inline-block;
        top: 12.6rem;
        right: 2.3rem;
        text-align: center;
        font-style: normal;
        line-height: 0.4rem;
    }
</style>