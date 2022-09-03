<template>
  <h1>Select a Size: {{ selectedSize }}</h1>
  <SizeSelector :selectedSize="selectedSize" @onChangeSize="selectedSize = $event" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import SizeSelector from './components/SizeSelector.vue';

  const selectedSize = ref('XL');
</script>

<style>
  body {
    background-color: #2c3e50;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: aliceblue;
    margin-top: 60px;
  }

  button {
    padding: 5px;
    margin-right: 5px;
    border: none;
    border-radius: 5px;
    width: 75px;
    cursor: pointer;
  }

  button:hover {
    background-color: #3498db;
    color: aliceblue;
  }
</style>
