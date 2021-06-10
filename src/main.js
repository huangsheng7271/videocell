import App from './App.vue';
import { createApp } from 'vue';

//引入ant design的组件和组件样式
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

const app = createApp(App);
//使用ant design的组件和组件样式
app.use(Antd);
app.mount('#app');
