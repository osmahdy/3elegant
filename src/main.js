import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons' // Or any icon pack you want
import '@fortawesome/fontawesome-free/css/all.min.css';

library.add(fas)

const app = createApp(App)
app.component('i-icon', FontAwesomeIcon)
app.use(router).mount('#app')
