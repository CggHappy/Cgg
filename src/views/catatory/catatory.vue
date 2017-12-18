<template>
  <div class="catatory">
    <header class="header">
      <form>
        <span class="icon iconfont icon-search"></span>
        <input type="text" placeholder="请输入您要购买的东西">
      </form>
    </header>
    <section class="section">
      <div class="section_left">
        <ul>
          <li v-for="(x,i) in goods" :k="i" class="li">{{x.name}}</li>
        </ul>
      </div>
      <div class="section_right"></div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'catatory',
    data() {
      return {
        goods: [
          {'name': '家乡食品'},
          {'name': '进口食品'},
          {'name': '牛奶乳品'},
          {'name': '休闲零食'},
          {'name': '生鲜果蔬'},
          {'name': '米面粮油'},
          {'name': '调味调料'},
          {'name': '酒水饮料'}
        ]
      }
    }
  }

</script>
<style scoped src="./catatory.css"></style>