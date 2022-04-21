import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.less'
import em from '../index'
const app = createApp(App)
em.install(app)
app.mount('#app')
