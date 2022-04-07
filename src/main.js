import { applyStyles } from '@popperjs/core'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import App from './ app.scss'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
