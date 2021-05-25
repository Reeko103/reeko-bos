import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// requireAuth: true 登录拦截
// keepAlive 缓存
const routes = [
  {
    path: "/",
    name: "Home",
    component: ()=>import('@/views/Home'),
    meta: { title: '数字楼宇大脑', keepAlive : false }
  },
  {
    path: "/mobile",
    name: "mobile",
    component: ()=>import('@/views/Mobile'),
    meta: { title: '数字楼宇大脑', keepAlive : false }
  },
];

const router = new VueRouter({
  mode: "hash",
  //mode: "history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,form,next) =>{
  //window.scrollTo(0,0) //解决跳转之后页面在底部的问题
  /*路由变化修改title*/
  if(to.meta.title){
      document.title=to.meta.title
  }
  next();
})

export default router;
