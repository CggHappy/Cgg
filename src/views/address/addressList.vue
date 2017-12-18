<template>
    <div class="addressList">
        <p class="p1">Cgg 130****0360</p>
        <p class="p2">北京是海淀区上地软件园南路57号 八维教育</p>
        <div class="edit">
            <p class="m">
                <span class="sss"></span>
                <b></b>
                <span class="a">默认地址</span>
            </p>
            <p>
                <i class='icon iconfont icon-lajitong'></i>
            </p>
        </div> 
    </div>
</template>
<script>
    export default {
        name: 'addressList'
    }
</script>
<style>
    .addressList{
        padding: 0 .4rem;
        height: 3.5rem;
        background: white;
    }
    .p1{
        font-size: .4rem;
        color: #666666;
        line-height: 1.2rem;
    }
    .p2{
        color: #adadad;
    }
    .m{
        height: 1rem;
        background: pink;
        margin-top: .5rem;
        line-height: 1rem;
    }
    .sss{
        width: .5rem;
        height: .5rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        position: absolute;
        left: .5rem;
        top: 3.5rem;
        line-height: .5rem;
        text-align: center;
    }
    .m b{
        display: inline-block;
        background-color: skyblue;
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
        margin-bottom: .04rem;
        margin-top: .46rem;
        margin-left: .22rem;
    }
    .a{
        margin-left: .3rem;
    }
</style>