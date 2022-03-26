import { createApp } from 'vue'
import { router } from './router'
import { store, key } from './store'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  const userName = localStorage.getItem('userName')
  if (!userName && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    userName === 'admin' ? next() : next('/404')
  } else {
    next()
  }
})

const app = createApp(App)
app.use(VuesticPlugin)
app.use(store, key)
app.use(router)

app.mount('#app')
