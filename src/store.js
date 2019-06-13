import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopData:{
      rstName:"",
      rstId:"",
      rstItem:[]
    }
  },
  mutations: {
    clearShopCar(state){//页面创建执行，清空之前的购物车
      state.shopData={
        rstName:"",
        rstId:"",
        rstItem:[]
      }
      console.log(state.shopData)
    },
    addIntoShopCar(state,params){
      console.log(params.pInfo)
      state.shopData.rstName=params.rstInfo.rstName;
      state.shopData.rstId=params.rstInfo.rstId;
      state.shopData.rstItem.push(params.pInfo);
      console.log(state.shopData)
    }
  },
  actions: {

  }
})
