import { createApp } from 'vue';
import { router } from './router';
import { store, key } from './store';
import App from './App.vue';
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

const app = createApp(App);
app.use(VuesticPlugin);
app.use(store, key);
app.use(router);

app.mount('#app');
