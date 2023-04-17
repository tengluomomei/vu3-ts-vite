import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "virtual:windi.css";


createApp(App).use(Vant).mount('#app')
