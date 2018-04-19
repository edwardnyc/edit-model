// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//promise 兼容处理
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUi from 'element-ui'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store';

Vue.config.productionTip = false

import './assets/scss/index.scss';
import './icomoon/style.css';

Vue.use(ElementUi)
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})