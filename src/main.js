import './common/js/fontSize';
import Vue from 'vue';
import App from './App.vue';
import messages from '../plugins/message/index.js';
import router from './router/config.js';
import axios from './http/axios.js';
import './common/css/reset.css';
import './common/css/style.css';
import './common/font/iconfont.css';
import './common/css/swiper.min.css';
import { store } from './store/store';

Vue.use(messages);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
