import Vue from 'vue'
import App from './App.vue'
import router from './router'
import productData from './product-data.js'

Vue.config.productionTip = false


let data = {
  products: productData,
  account: {
    name: "",
    email: "",
    allergyAttributes: {
      dairyFree: false,
      nutFree: false,
      vegan: false
    }
  }
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
