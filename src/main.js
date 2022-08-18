import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const app = new Vue({
  router,
  data(){
    return{
      width: 0,
      promedio: 0
    }
  },
  render: h => h(App),
  watch:{
    $route (to, from){
        this.$root.width = 0
        this.$root.promedio = 0
    }
  },
}).$mount('#app')

