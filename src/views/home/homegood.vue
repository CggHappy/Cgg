<template>
    <dl @click="message">
        <dt><img :src="'http://www.lb717.com/'+val.obj_data" alt=""></dt>
        <dd>
            <h4>{{val.goods_name}}</h4>
            <p><label>¥{{val.discount_price}}</label>
                <span @click.stop="addCart"><img class="cart" src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png"></span>
            </p>
        </dd>
    </dl>
</template>
<script>
    export default {
        name: '',
        props: ['val'],
        methods: {
            message() {
                this.para = {
                    store_name: val.store_name,
                    store_logo: val.store_name,
                    goods_bane: val.goods_name,
                    obj_data: val.obj_data,
                    price: val.discount_price
                }
                this.$router.push({ name: 'goodsdetails' })
            },
            addCart() {
                console.log('addCart');
                // let token = getCookie('token');
                // if(!token){
                //     this.$router.push({name: 'login', query: {from: 'home'}});
                //     return;
                // }
                this.$http.post('/mall/index/getGoodsChannel', {}).then(res => {
                    this.$message('添加成功');
                    this.$store.commit('update_cart', {
                        id: this.val.goods_id,
                        goods_name: this.val.goods_name,
                        price: this.val.discount_price,
                        url: 'http://www.lb717.com/' + this.val.obj_data,
                        count: 1,
                        checkbox: false
                    })
                })
            }
        }
    }

</script>
<style>
    dl {
        width: 48%;
        height: 5.6rem;
        /*height: auto;*/
        float: left;
        margin-top: .2rem;
        margin-left: 2%;
        background: white;
    }

    dt {
        width: 100%;
        height: 3.65rem;
    }

    dd h4 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        height: .8rem;
        line-height: .4rem;
        font-size: .3rem;
        margin-top: .2rem;
        padding: 0 .1rem;
    }

    dd p {
        margin: .1rem;
        color: #fc4141;
    }

    dl dt img {
        width: 100%;
        height: 100%;
    }

    .cart {
        width: 0.65rem;
        height: 0.55rem;
        float: right;
    }
</style>