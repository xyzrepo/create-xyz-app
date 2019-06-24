import Vue from 'vue';
import jquery from 'jquery';
import 'fomantic-ui-css/semantic.min';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.min.css';
if (process.browser) { 
    Vue.use(jquery, {name: '$'});
    // Vue.use(VueAwesomeSwiper, {name: 'swiper'});
}