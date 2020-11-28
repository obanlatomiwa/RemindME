import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from '@/components/styles/BaseCard.vue';
import Button from '@/components/styles/Button.vue';

const app = createApp(App);
app.component('BaseCard', BaseCard);
app.component('Button', Button);

app.mount('#app');
