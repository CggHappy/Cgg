import Vue from 'vue';
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:3000';
}
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://www.lb717.com';
}
var httpPlugin = {
    install: function (Vue) {
        Vue.prototype.$http = axios;
    }
};

Vue.use(httpPlugin);
