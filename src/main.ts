import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "virtual:windi.css";
import router from './router'
import { createPinia } from 'pinia'
import { getAppParameters } from '@/utils/appInteractive';

const app = createApp(App)
getAppParameters();
const pinia = createPinia()
app.use(pinia)
app.use(Vant)
app.use(router)

app.mount('#app')
