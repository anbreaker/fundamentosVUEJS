<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup></script>

<style scoped>
  nav {
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    border-left: 1px solid var(--color-border);
    display: inline-block;
    padding: 0 1rem;
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
