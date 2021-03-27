import Vue from 'vue';
import VueRouter from 'vue-router';
import Poke from './Pages/Poke.vue';
import Info from './Pages/Info.vue';
import NotFound from './Pages/NotFound.vue';

const routes = [
    { name: 'Home', path: '/', component: Poke },
    { name: 'Info', path: '/Info', component: Info },
    {
        path: '/NotFound',
        alias: '*',
        name: 'NotFound',
        component: NotFound
    }
]
Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes: routes });
export default router;