import Vue from 'vue'
import Router from 'vue-router'
import homePage from "./components/home/homeBody"
import orderPage from "./components/order/orderHome"
import aboutMe from "./components/order/aboutMe"
import myOrder from "./components/order/myOrder"
import collect from "./components/order/Collecting"
import adressManage from "./components/order/adressManage"
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
      component:orderPage,
      children: [
        {
          path: 'aboutMe',
          name:"aboutMe",
          component:aboutMe
        },
        {
          path:"/",
          name:"myOrder",
          component:myOrder
        },
        {
          path:"collect",
          name:"collect",
          component:collect
        },
        {
          path:"adressManage",
          name:"adressManage",
          component:adressManage
        },
      ]
    },
    
  ]
})
