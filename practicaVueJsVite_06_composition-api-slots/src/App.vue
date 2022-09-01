<template>
  <div class="user-data">{{ userData.name }} @{{ userData.username }}</div>

  <NavBar />
</template>

<script setup>
  import { reactive, provide } from 'vue';

  import NavBar from './components/NavBar.vue';

  const userData = reactive({
    name: 'anbreaker',
    username: '@antunez19',
  });

  provide('userData', userData);
</script>

<style>
  @import '@/assets/base.css';

  #app {
    font-weight: normal;
    margin: 0 auto;
    max-width: 1280px;
    padding: 2rem;
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  a,
  .green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
  }

  @media (hover: hover) {
    a:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }

  .user-data {
    background: hsla(160, 100%, 37%, 1);
    font-size: 12px;
    padding: 5px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
