import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'

import {lazyPlugin}from '@/driectives'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

