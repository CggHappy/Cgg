<template>
    <div class="register">
        <header class="header">
            <router-link :to="{name:'login'}"><img src="http://www.lb717.com/static/mobile/images/denglu_img/return.png" alt=""></router-link>
            <p>注册会员</p>
            <router-link :to="{name: 'login'}"><span class="sr">登录</span></router-link>
        </header>
        <section class="section">
            <ul>
                <li>
                    <a href=""><img src="http://www.lb717.com/static/mobile/images/denglu_img/number.png" alt=""></a>
                    <input type="text" placeholder="请输入您的手机号" v-model="tel">
                </li>
                <li>
                    <a href=""><img src="http://www.lb717.com/static/mobile/images/denglu_img/code.png" alt=""></a>
                    <input type="text" placeholder="请输入验证码" class="i">
                    <span class="h">获取验证码</span>
                </li>
                <li>
                    <a href=""><img src="http://www.lb717.com/static/mobile/images/denglu_img/password.png" alt=""></a>
                    <input type="text" placeholder="请输入您的密码" v-model="psd">
                </li>
            </ul>
            <button @click="go_register">确定</button>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                tel: '',
                psd: ''
            }
        },
        methods: {
            go_register() {
                console.log(this.tel);
                console.log(this.psd);
                this.$http.post('/mall/index/UserList',{
                    tel:this.tel,
                    psd:this.psd
                }).then(res=>{
                    console.log(res);
                    alert('注册成功！')
                })
            }
        }
    }
</script> 
<style scoped src="./register.css">

</style>
