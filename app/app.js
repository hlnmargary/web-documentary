import './assets/scss/styles.scss';
import Vue from 'vue';
import router from './router';
import AudioVisual from 'vue-audio-visual';

import VueAxios from 'vue-axios';
import axios from 'axios';

import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

Vue.use(VueAxios, axios);

Vue.use(AudioVisual);
Vue.use(VuePlyr);


Vue.config.productionTip = false;

new Vue({ router: router }).$mount('#root');
