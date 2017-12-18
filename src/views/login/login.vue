<template>
    <div class="login">
        <header class="header">
            <router-link :to="{name:'home'}"><img src="http://www.lb717.com/static/mobile/images/denglu_img/return.png" alt=""></router-link>
            <p>会员登陆</p>
            <router-link :to="{name: 'register'}"><span class="sr">注册</span></router-link>
        </header>
        <section class="section">
            <ul>
                <li>
                    <img src="http://www.lb717.com/static/mobile/images/denglu_img/number.png" alt="">
                    <input type="text" placeholder="请输入您的手机号" v-model="tel">
                </li>
                <li>
                    <a href=""><img src="http://www.lb717.com/static/mobile/images/denglu_img/password.png" alt=""></a>
                    <input type="text" placeholder="请输入您的密码" v-model="psd">
                </li>
            </ul>
            <button @click="go_login">立即登陆</button>
            <p class="m"><a href="">忘记密码？</a></p>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                tel: '',
                psd: '',
                loading: false
            }
        },
        methods: {
            go_login() {
                console.log(this.tel);
                console.log(this.psd);
                // this.$store.commit('switch_loading',true);
                // var query = this.$route.query.from || 'admin';
                // this.$http.post('/mall/index/Login', {
                //     tel: this.tel,
                //     psd: this.psd
                // }).then(({ data }) => {
                //     console.log(data);
                //     setTimeout(() => {
                //         if (data.code == '1') {
                //             setCookie('token', data.token)
                //             // this.$store.commit('update_user_name', this.user_name)
                //             this.$router.push({ path: '/index/home'})
                //         } else {
                //             alert('登陆信息有误');
                //             this.tel='',
                //             this.psd=''
                            
                //         }
                //         // this.$store.commit('switch_loading',false);
                //     }, 2000)

                // })
            }
        }
    }
</script> 
<style scoped src="./login.css">

</style>
