<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>Username is: {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
  import { inject } from 'vue';

  // props
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'No title specified',
    },
  });

  // emits
  const emit = defineEmits(['update:modelValue']);

  const userData = inject('userData');
</script>

<style>
  .modal {
    background: aliceblue;
    color: black;
    display: grid;
    height: 100%;
    left: 0;
    padding: 2rem;
    place-items: center;
    top: 0;
    width: 50%;
    z-index: 1;
  }
</style>
