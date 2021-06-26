<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '../api';
import PxAssetsTable from '@/components/PxAssetsTable';

export default {
  name: 'Home',

  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  async created() {
    try {
      this.isLoading = true;
      this.assets = await api.getAssets();
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
