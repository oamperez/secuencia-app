<template>
  <div>
    <div class="card-body d-flex justify-content-center flex-column align-items-center" v-if="!finish">
      <h2 class="text-dark">Completa la secuencia</h2>
      <h3>{{timer}}</h3>
      <div class="py-5 mb-5 d-lg-flex align-items-center">
        <div class="d-flex align-items-center px-2 py-lg-3 py-4" v-for="(num, index) in numbers" :key="index">
          <h1 class="text-number px-4" v-if="!num.random">{{ num.number }}</h1>
          <div class="position-relative px-4" v-else>
            <div class="cuadre" :class="num.is_select ? num.number == num.select ? 'success' : 'danger' : ''">
              <h1 v-if="num.is_select">{{ num.select ? num.select : num.number }}</h1>
            </div>
            <div class="numbers shadow-lg p-2" v-if="!num.is_select">
              <div class="number" :class="key == 0 || key == num.options.length-1 ? '' : 'mx-2'" v-for="(item, key) in num.options" :key="key" @click="SELECT(item, index)">
                <h1>{{ item }}</h1>
              </div>
            </div>
            <div class="correct" v-if="num.is_select">
              <h1 v-if="num.select != num.number">La respuesta correcta es {{ num.number }}</h1>
              <span v-else>
                <i class="fa-solid fa-circle-check"></i>
              </span>
            </div>
          </div>
          <div class="display-6 text-info" v-if="index != numbers.length-1"><i class="fa-solid fa-arrow-right-long"></i></div>
        </div>
      </div>
      <div class="form-group" v-if="numbers.filter(e => e.is_select).length == numbers.length">
        <button class="btn btn-dark btn-lg border-0 px-5 shadow" @click="SEND()">Responder</button>
      </div>
    </div>
    <div v-else>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="correct position-relative">
          <span>
            <i class="fa-solid fa-circle-check"></i>
          </span>
        </div>
        <h1 class="text-des">DESEMPEÑO</h1>
        <h1 class="text-pro mb-5">{{$root.promedio*100/intentos}}%</h1>
        <router-link :to="{ name: 'Index' }" class="btn btn-lg btn-danger px-4">VOLVER A JUGAR</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  data(){
    return{
      select: false,
      number: null,
      numbers: [],
      intentos: 5,
      my_intentos: 0,
      timer: 10,
      stop: false,
      finish: false,
      random: 1
    }
  },
  created(){
    this.RANDOM()
    this.TIMER()
  },
  methods:{
    RANDOM: function(){
      this.numbers = []
      let number = _.random(0, 99)
      let numbers = _.range(number, number+5)
      this.random = _.random(1, 5)
      numbers.forEach(element => {
        this.numbers.push({
          number: element,
          random: false,
          select: element,
          options: [],
          is_select: true
        })
      })
      for (let index = 0; index < this.random; index++) {
        let random = _.random(numbers[0], numbers[numbers.length-1])
        let key = this.numbers.findIndex(e => e.number == random)
        let options = _.range(random-2, random+1)
        this.numbers[key].random = true
        this.numbers[key].select = null
        this.numbers[key].is_select = false
        this.numbers[key].options = options.sort(function(){return Math.random() - 0.5})
      }
    },
    SELECT: function(number, index){
      let count = 0
      count ++
      if(count == 1){
        this.numbers[index].select = number
        this.numbers[index].is_select = true
        if(this.numbers.filter(e => e.is_select == true).length == this.numbers.length){
          this.stop = true
        }
      }
    },
    SEND: function(){
      let count = 0
      count ++
      if(count == 1){
        if(this.numbers.filter(e => e.select == e.number).length == this.numbers.length){
          this.$root.promedio++
        }
        if(this.finish == false){
          this.$root.width+=20
          this.timer = 10
          this.stop = false
          this.my_intentos++
          this.RANDOM()
          this.TIMER()
          if(this.intentos == this.my_intentos){
            this.finish = true
          }
        }
      }
    },
    FINISH_TIME: function(){
      this.numbers.forEach(element => {
        element.is_select = true
      });
    },
    TIMER: function() {
        if (this.timer >= 1 && this.stop == false) {
            setTimeout(() => {
                if(this.stop == false){
                  this.timer -= 1
                }
                this.TIMER()
            }, 1000)
        }else{
          this.FINISH_TIME()
        }
    }
  }
}
</script>