import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'


const pinia = createPinia()
createApp(App).use(pinia).use(naive).mount('#app')

    
