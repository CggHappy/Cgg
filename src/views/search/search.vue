<template>
    <div class="search">
        <header class="header">
            <form>
                <span class="icon iconfont icon-search"></span>
                <input type="text" placeholder="请输入您要购买的东西" v-model="searchInput">
            </form>
            <span class="s" @click="search">搜索</span>
        </header>
        <section class="section">
            <nav class="nav">
                <span>最近搜索</span>
                <span @click="del"><img id="del" src="http://www.lb717.com/static/mobile/images/my/remo.png" alt=""></span>
            </nav>
            <p v-if="this.searchHistoryList.length == 0">暂无搜索记录...</p>
            <ul>
                <li v-for="(x,i) in searchHistoryList" :key="i">{{x}}</li>
            </ul>
            <div>
                <p>大家都在搜</p>
                <ul>
                    <li v-for="(y,k) in hotList" :key="k">{{y.cont}}</li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    import _ from 'lodash';
    export default {
        name: 'search',
        data() {
            return {
                searchInput: '',
                searchHistoryList: [],
                hotList: [
                    {
                        'cont': '粽子'
                    },
                    {
                        'cont': '锅巴'
                    },
                    {
                        'cont': '红酒'
                    },
                    {
                        'cont': '酱'
                    },
                    {
                        'cont': '小吃'
                    },
                    {
                        'cont': '零食'
                    },
                    {
                        'cont': '干果'
                    },
                    {
                        'cont': '特产'
                    }
                ]
            }
        },
        created() {
            this.getHistory();
        },
        methods: {
            search() {
                if (this.searchInput == '') return;
                let ls = localStorage;
                let shistory = ls.getItem('searchHistory');
                console.log(shistory);
                if (!shistory) {
                    ls.setItem('searchHistory', JSON.stringify([this.searchInput]))
                } else {
                    let newListory = JSON.parse(shistory);
                    newListory.unshift(this.searchInput);
                    newListory = _.uniq(newListory);
                    ls.setItem('searchHistory', JSON.stringify(newListory))
                }
                this.getHistory();
                this.searchInput = ''
            },
            del() {
                let ls = localStorage;
                ls.setItem('searchHistory', JSON.stringify([]));
                this.getHistory()
            },
            getHistory() {
                let ls = localStorage;
                this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'))
            }
        }
    }

</script>
<style scoped src="./search.css">

</style>