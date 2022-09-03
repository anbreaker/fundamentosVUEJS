<template>
  <button
    v-for="size in posibleSizes"
    :class="{ active: props.selectedSize === size }"
    @click="emits('onChangeSize', size)"
  >
    {{ size }}
  </button>
</template>

<script lang="ts" setup>
  const posibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  //JavaScript
  /*
  const props = defineProps({
    selectedSize: {
      type: String,
      required: true,
    },
  });

  const emits = defineEmits({
    onChangeSize: String,
  });
   */

  //TypeScript
  const props = defineProps<{ selectedSize: string }>();

  const emits = defineEmits<{ (event: 'onChangeSize', value: string): void }>();
</script>

<style>
  .active {
    background-color: #3498db;
    color: aliceblue;
    transition: all 0.3s ease-out;
  }
</style>
