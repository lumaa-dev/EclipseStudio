import { createApp } from 'vue'
import App from './App.vue'
import NavBarVue from './components/NavBarVue.vue'

import './styles/main.css'

createApp(App).mount('#app')
createApp(NavBarVue).mount('#nav')
