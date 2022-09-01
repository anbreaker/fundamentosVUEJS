<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show light modal?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>

    <button @click="showModal = true">Show modal</button>

    <component
      v-model="showModal"
      :is="showDarkModals ? Modal : ModalDark"
      title="My modal title (via prop)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus
        ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam
        quod architecto?
      </p>
    </component>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Modal from '@/components/Modal.vue';
  import ModalDark from '@/components/ModalDark.vue';

  // Modals
  const showDarkModals = ref(false);
  const showModal = ref(false);
</script>

<style scoped>
  input[type='checkbox'] {
    margin-left: 1rem;
    transform: scale(1.5);
  }
</style>
