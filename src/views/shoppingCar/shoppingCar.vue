<template>
  <div class="shoppingCar">
    <header class="header">
      <span></span>
      <p>购物车</p>
      <span>编辑</span>
    </header>
    <section class="section">
      <shoppingList v-for="(x,i) in cart_list" :key="x.id" :data="x" :index="i"></shoppingList>
      <div class="acc">
        <p>
          <span class="item-checke" @click="checkedAll"><b v-if="$store.state.checkAll"></b></span>
          <span class="all">全选</span>
        </p>
        <p>
          <span>合计：<b class="b">¥{{$store.state.sum.toFixed(2)}}</b></span>
          <span class="j">结算</span>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
  import shoppingList from './shoppingList.vue';
  import homegood from '../home/homegood.vue';
  export default {
    name: 'shoppingCar',
    components: {
      shoppingList,
      homegood
    },
    data() {
      return {
        goods_list: [],
        channelId: 2,
        isA: this.$store.state.cart_list.checkbox
      };
    },
    computed: {
      cart_list() {
        return this.$store.state.cart_list;
      }
    },
    methods:{
      checkedAll () {
        this.$store.commit('updated_checkedAll');
        this.$store.commit('updated_sum');
      }
    }
  }
</script>
<style scoped src="./shoppingCar.css"></style>