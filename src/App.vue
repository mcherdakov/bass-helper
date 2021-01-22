<template>
  <main class='main'>
    <ScaleTrainer />
  </main>
</template>

<script>
import ScaleTrainer from './components/ScaleTrainer.vue';

export default {
  name: 'App',
  components: {
    ScaleTrainer,
  }
}
</script>

<style scoped>
  .main {
    margin-top: 20;
  }
</style>
