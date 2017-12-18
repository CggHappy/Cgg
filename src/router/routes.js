import home from '../views/home/home.vue';
import catatory from '../views/catatory/catatory.vue';
import shopping from '../views/shoppingCar/shoppingCar.vue';
import my from '../views/my/my.vue';
import index from '../views/index.vue';
import search from '../views/search/search.vue';
import login from '../views/login/login.vue';
import register from '../views/register/register.vue';
import goodsdetails from '../views/goodsdetails/goodsdetails.vue';
import address from '../views/address/address.vue';
let routes = [
    {
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'catatory',
                name: 'catatory',
                component: catatory
            },
            {
                path: 'shopping',
                name: 'shopping',
                component: shopping
            },
            {
                path: 'my',
                name: 'my',
                component: my
            },
            {
                path: 'search',
                name: 'search',
                component: search
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/goodsdetails',
        name: 'goodsdetails',
        component: goodsdetails
    },
    {
        path: '/address',
        name: 'address',
        component: address
    }
];
export default routes;