<template>
  <div class="card-body d-flex justify-content-center flex-column align-items-center" style="height:50vh;">
    <h1 class="display-4 font-weight-bold mb-5 text-center">Completa la secuencia</h1>
    <div class="d-flex flex-column">
      <router-link :to="{ name: 'Play' }" class="btn btn-lg btn-primary px-5 mb-3">PRINCIPIANTE</router-link>
      <router-link :to="{ name: 'Advanced' }" class="btn btn-lg btn-danger px-5">AVANZADO</router-link>
    </div>
  </div>
</template>
