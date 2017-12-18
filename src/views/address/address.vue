<template>
    <div class="address">
        <header class="header">
            <router-link :to="{name: 'my'}"><img src="http://www.lb717.com/static/mobile/images/denglu_img/return.png" alt=""></router-link>
            <span>收货地址</span>
            <span class="ss"></span>
        </header>
        <section class="section">
            <addressList></addressList>
        </section>
    </div>
</template>
<script>
    import addressList from './addressList.vue'
    export default {
        name: 'address',
        components: {
            addressList
        }
    }
</script>
<style src="./address.css"></style>