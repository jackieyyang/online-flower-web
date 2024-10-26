import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import i18n from './locale';
import App from './App.vue'
import router from './router'
import { Navigation } from '@/utils/nagivation'

if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCK === 'true') {
  import ('./mock')
}

Navigation.init(router)

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(i18n)

app.mount('#app')