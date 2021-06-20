import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
const app = createApp(App)
installElementPlus(app)
import VueParticles from 'vue-particles'
app
    .use(store)
    .use(router)
    .use(VueParticles)
    .mount('#app')