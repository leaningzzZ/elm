import Vue from 'vue'
import Router from 'vue-router'
import homePage from "./components/home/homeBody"
import orderPage from "./components/order/order"
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: "home"
    },
    {
      path:"/home",
      name:"home",
      component:homePage
    },
    {
      path:"/order",
      name:"order",
      component:orderPage
    }
  ]
})
