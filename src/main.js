import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/common.css"
import router from './router/index.js'
var app = createApp(App);
//vue中使用router
app.use(router);
app.mount('#app');

