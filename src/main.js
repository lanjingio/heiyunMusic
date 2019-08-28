import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from "axios";
// 引入包
import Results from './components/results.vue'
import Player from './components/player.vue'
import Video from './components/video.vue'
import Comment from './components/comment.vue'

Vue.config.productionTip = false;
//用包
Vue.use(VueRouter);
Vue.prototype.axios = Axios;
//路由规则数组
const routes = [
  {
    path:'/results',
    component:Results
  },
  {
    path:'/player',
    component:Player
  },
  {
    path:'/video',
    component:Video
  },
  {
    path:'/comment',
    component:Comment
  }
];
//创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass:'active'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
