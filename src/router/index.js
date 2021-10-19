//引入router相关
import { createRouter, createWebHashHistory } from 'vue-router';
//懒加载方式加载页面
const Home = () => import('./../pages/Home.vue')
const Course = () => import('./../pages/Course.vue')
const Friends = () => import('./../pages/Friends.vue')
const Study = () => import('./../pages/Study.vue')
const My = () => import('./../pages/My.vue')

//2.创建映射关系
const routes = [
    {
        path: '/',
        redirect: '/home'   //配置路由重定向
    },
    { path: '/home', component: Home },
    { path: '/course', component: Course },
    { path: '/friends', component: Friends },
    { path: '/study', component: Study },
    { path: '/my', component: My }

]
//3.创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes   //键值名字一样，使用简写
});
//4.导出以便vue使用
export default router;
