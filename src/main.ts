import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { i18n } from '@/makers/i18n.maker';

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
