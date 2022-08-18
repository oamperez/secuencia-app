<template>
  <div>
    <div class="card-body d-flex justify-content-center flex-column align-items-center" v-if="!finish">
      <h2 class="text-dark">Completa la secuencia</h2>
      <h3>{{timer}}</h3>
      <div class="py-5 mb-5 d-lg-flex align-items-center">
        <div class="d-flex align-items-center py-lg-3 py-4" v-for="(num, index) in numbers" :key="index">
          <h1 class="text-number px-4" v-if="num != random">{{ num }}</h1>
          <div class="position-relative px-4" v-else>
            <div class="cuadre" :class="select ? number == random ? 'success' : 'danger' : ''">
              <h1 v-if="select">{{ number ? number : random }}</h1>
            </div>
            <div class="numbers shadow-lg p-2" v-if="!select">
              <div class="number" :class="key == 0 || key == options.length-1 ? '' : 'mx-2'" v-for="(item, key) in options" :key="key" @click="SELECT(item)">
                <h1>{{ item }}</h1>
              </div>
            </div>
            <div class="correct" v-if="select">
              <h1 v-if="number != random">La respuesta correcta es {{ random }}</h1>
              <span v-else>
                <i class="fa-solid fa-circle-check"></i>
              </span>
            </div>
          </div>
          <div class="display-6 text-info" v-if="index != numbers.length-1"><i class="fa-solid fa-arrow-right-long"></i></div>
        </div>
      </div>
      <div class="form-group" v-if="select">
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
      options: [],
      random: null,
      intentos: 5,
      my_intentos: 0,
      timer: 10,
      stop: false,
      finish: false
    }
  },
  created(){
    this.RANDOM()
    this.TIMER()
  },
  methods:{
    RANDOM: function(){
      let number = _.random(0, 99)
      this.numbers = _.range(number, number+5)
      this.random = _.random(number, number+4)
      let sum = _.random(1, 2)
      let resta = _.random(1, 2)
      if(sum > resta){
        this.options = _.range(this.random, this.random+3)
      }else if(sum < resta){
        this.options = _.range(this.random-2, this.random+1)
      }else{
        this.options = _.range(this.random-1, this.random+2)
      }
    },
    SELECT: function(number){
      let count = 0
      count ++
      if(count == 1){
        this.number = number
        this.select = true
        this.stop = true
        if(this.random == number){
          this.$root.promedio++
        }
      }
    },
    SEND: function(){
      let count = 0
      count ++
      if(count == 1){
        if(this.finish == false){
          this.$root.width+=20
          this.timer = 10
          this.select = false
          this.number = null
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
        this.select = true
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