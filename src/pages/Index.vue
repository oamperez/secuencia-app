<template>
  <div class="card-body d-flex justify-content-center flex-column align-items-center" style="height:50vh;">
    <h1 class="display-4 font-weight-bold mb-5">Completa la secuencia</h1>
      <router-link :to="{ name: 'Play' }" class="btn btn-lg btn-primary px-4 mb-4">JUGAR NIVEL PRINCIPIANTE</router-link>
      <router-link :to="{ name: 'Advanced' }" class="btn btn-lg btn-danger px-4">JUGAR NIVEL AVANZADO</router-link>
  </div>
</template>
