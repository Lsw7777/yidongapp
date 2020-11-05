import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 加载全局样式（最好放到最后，方便去覆盖第三方样式）
import './styles/index.less'
// 加载组件要用名字， 加载样式表直接用地址就行

Vue.config.productionTip = false

new Vue({
  // 创建根实例,把router，store配置到根实例中
  // 把APPue组件渲染到主页index中的id=app里
  router,
  store,
  render: h => h(App)
}).$mount('#app')