import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { i18n } from '@/makers/i18n.maker';
import { prepareApi } from '@/makers/api.maker';

const app = createApp(App)
  .use(router)
  .use(i18n);

// can use .withMock() to get fake data
prepareApi(app);

app.mount('#app');