import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.less'
import sk from '@/components/index'
const app = createApp(App)
// sk.install(app)
app.mount('#app')
