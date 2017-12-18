import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutation';
Vue.use(Vuex);
let store = new Vuex.Store({
    state,
    mutations
})

store.subscribe(()=>{
    console.log(store.state.cart_list)
})
export { store };