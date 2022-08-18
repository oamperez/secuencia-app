<template>
    <div id="app" data-app>
      <div class="progress w-100 rounded-0">
        <div class="progress-bar border-0" role="progressbar" v-bind:style="fullWidth" v-bind:aria-valuenow="$root.width" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="reload" v-if="$route.name != 'Index'">
        <h1 @click="$router.go()"><i class="fa-solid fa-arrows-rotate"></i> VOLVER A JUGAR</h1>
        <h1 @click="$router.push('/')"><i class="fa-solid fa-arrow-right-from-bracket"></i> SALIR</h1>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center pt-5 mt-5">
          <div class="col-lg-10" style="height: 75vh;">
            <router-view :key="$route.fullPath"/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  computed: {
    fullWidth () {
      return `width:${this.$root.width}%`;
    },
    isText(){
      if( isNaN(this.$root.width)){
        this.$root.width = ''
      }
    }
  },
  watch: {
    width(){
      this.isText
    }
  }
}
</script>
<style>
.btn-dark{
  background-color: #495259 !important;
}
.text-dark{
  color: #2C4456 !important;
}
.text-info{
  color: #BCD6EB !important;
}
.progress-bar{
  background: linear-gradient(to right,#FD8124, #FECA32);
  border-radius: 0rem 1rem 1rem 0rem;
}
.progress{
  background: transparent !important;
  height: 25px;
}
.reload{
  position: absolute;
  right: 1rem;
  top: 2rem;
  cursor: pointer;
}
.reload h1{
  font-size: 0.8rem;
}
.cuadre{
  width: 140px;
  height: 140px;
  border: 2px dashed #3333;
  border-radius: 0.5rem !important;
}
.cuadre.success{
  border: 2px solid #5AE0C9;
  box-shadow: 0 3rem 4rem #5ae0ca87 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cuadre.danger{
  border: 2px solid #F4787D;
  box-shadow: 0 3rem 4rem #F4787D87 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.correct{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
}
.correct h1{
  margin: 0;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  color: #B40614;
}
.correct span{
  font-size: 3rem;
  color: #16977E;
  margin: 0;
  text-align: center;
}
.cuadre h1{
  font-weight: 600;
  font-size: 5rem;
}
.display-6{
  font-size: 2.5rem;
}
.text-number{
  font-weight: 600;
  font-size: 5rem;
}
.numbers{
  background: #8A9FB1;
  width: auto;
  height: auto;
  position: absolute;
  left: -25px;
  right: -25px;
  bottom: -35px;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
  border-radius: 0.5rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.position-relative{
  position: relative;
}
.number{
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: #ffff;
  border-radius: 0.5rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number:hover{
  background: #5AE0C9;
  color: #ffff;
}
.number h1{
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}
.text-des{
  color: #6A7680 !important;
  margin-bottom: 1.5rem;
}
.text-pro{
  font-size: 6rem;
  font-weight: bold;
}
@media (min-width: 992px) {
  .correct{
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
  }
}
</style>

