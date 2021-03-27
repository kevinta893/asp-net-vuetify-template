import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Vuetify from './Plugins/vuetify.js'

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router: Router,
    vuetify: Vuetify
});