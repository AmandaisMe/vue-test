// 引入vue模块 路由
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
// require('./css/ionic.css')
Vue.use(VueRouter);
Vue.use(VueResource);

//保存数据
// import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    mutations: {
        getdetail: function() {
            console.log(this)
            this.$http.jsonp('http://localhost/webpack/movies/php/data.php', {
                params: {
                    callback: 'JSON-CALLBACK'
                }
            }).then(function(data) {
                console.log(data.data.movies)
                this.items = data.data.movies;


            })
        }
    }
})

var avue = require('./components/a.vue')
var bvue = require('./components/b.vue')
var xh = require('./components/xheader.vue')

var xheader = Vue.extend({
    template:require('./template/xheader.html')
})

var router = new VueRouter({

    routes: [{
        path:'/a',
        component:xh
    },{
        path: '/b',
        component: avue
    },{
        path:'/c',
        component: bvue
    }]
});





new Vue({
    router: router,
    store: store,

    components: {
        avue: avue,
        bvue:bvue,
        xheader:xheader
    }

}).$mount('#demo')
