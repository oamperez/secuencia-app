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
</style>
