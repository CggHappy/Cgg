import vue from 'vue';
import VueRouter from 'vue-router';
// import { getCookie, setCookie } from '../utils/utils.js';

import routes from './routes';

vue.use(VueRouter);
let router = new VueRouter({
    routes
});
// router.beforeEach((to, from, next) => {
//     if (to.name == 'login' || to.name == 'register') {
//         next();
//     } else {

//     }
//     if (to.name !== 'login') {
//         if (getCookie('token')) {
//             next();
//         } else {
//             next('/login');
//         }
//     } else {
//         next();
//     }
// });
export default router;