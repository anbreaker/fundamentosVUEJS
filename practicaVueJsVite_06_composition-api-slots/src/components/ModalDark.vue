<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
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

  const emit = defineEmits(['update:modelValue']);
</script>

<style>
  .modal-dark {
    background: #333;
    color: white;
    height: 100%;
    left: 0;
    padding: 2rem;
    top: 0;
    width: 50%;
    z-index: 1;
    display: grid;
    place-items: center;
  }
</style>
