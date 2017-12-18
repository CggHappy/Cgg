<template>
        <dl class="dl">
            <span class="item-check" @click="change_checked">
            <b v-if="data.checkbox"></b>
        </span>
            <dt>
                <img :src="data.url" alt="">
            </dt>
            <dd>
                <p>{{data.goods_name}}</p>
                <p>x{{data.count}}</p>
                <p>
                    <span>￥{{data.price}}</span>
                </p>
                <div class="jisuan">
                    <span @click="reduce">-</span>
                    <span>{{data.count}}</span>
                    <span @click="add">+</span>
                </div>
            </dd>
        </dl>

</template>
<script>
    export default {
        name: 'wrap',
        props: {
            data: {
                required: true,
                type: Object
            },
            index:{
                type: Number,
                required: true
            }
        },
        methods: {
            reduce(){
            this.$store.commit('updated_num',{
                index:this.index,
                num: --this.data.count
            });
            this.$store.commit('updated_sum');
        },
        add(){
            this.$store.commit('updated_num',{
                index:this.index,
                num: ++this.data.count
            });
            this.$store.commit('updated_sum');
        },
        change_checked(){
            this.data.checkbox = !this.data.checkbox;
            this.$store.commit('updated_checkbox',{
                checked: this.data.checkbox,
                index:this.index
            });
            this.$store.commit('updated_sum');
        }
        }
    }

</script>
<style>
    .dl {
        width: 96%;
        height: 2.6rem;
        background: #fff;
        margin-bottom: .2rem;
        position: relative;
        background-color: #fff;
        margin-bottom: .2rem;
    }

    dt {
        width: 2rem;
        margin-top: .32rem;
        float: left;
        height: 2rem;
        margin-left: .8rem;
    }

    dl img {
        width: 100%;
        height: 100%;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
    }

    dd {
        font-size: .26rem;
        margin-top: .32rem;
        float: right;
    }

    .jisuan span {
        border: 1px solid #ccc;
        padding: .1rem .2rem;
        font-weight: normal;
    }

    dl dd p:nth-child(1) {
        width: 4.2rem;
        padding-top: .1rem;
        height: .6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: .5rem;
        font-size: .3rem;
        color: #666666;
    }

    dl dd p:nth-child(2) {
        position: absolute;
        bottom: 1rem;
    }

    p span {
        color: red;
    }

    dl dd p:nth-child(3) {
        position: absolute;
        bottom: .46rem;
    }

    dl .jisuan {
        position: absolute;
        display: inline-block;
        width: 2rem;
        height: .6rem;
        top: 1.4rem;
        right: .3rem;
        font-weight: 300;
        line-height: auto;
        border-radius: 2px;
        display: -webkit-flex;
    }

    .item-check {
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: absolute;
        left: .2rem;
        top: 1.1rem;
        line-height: .4rem;
        text-align: center;
    }
    .item-check b {
        display: inline-block;
        background-color: skyblue;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        margin-bottom: .04rem;
    }
    
</style>