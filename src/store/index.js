import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

// VueX Vue状态管理模式，作用是 让组件之间共享数据更方便快捷
// 如果组件如果有需要共享的数据，可以直接挂载到VueX实例中，而不必通过父子组件之间的传值了
// 状态管理有5个核心，分别是state、mutation、getter、action、module
// state简单的理解，可以把state想象成组件中的data，专门用来存储数据的。
// 每一个 Vuex 应用的核心就是 store（仓库）
// store就是一个容器，它包含着你的应用中大部分的状态 (state)
// Vuex 的状态存储是响应式的，当 Vue 组件从 store 中读取状态的时候
// 若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
// 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
// 这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用