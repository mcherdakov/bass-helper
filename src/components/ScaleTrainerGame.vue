<template>
  <div class='game-max-mode'>
    <p v-if='scales.length' @click='onClick'>{{ scales[currentIndex].name }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    scales: {
      required: true,
    }
  },
  setup(props) {
    const getRandomIndex = () => {
      return Math.floor(Math.random() * props.scales.length)
    }
    const currentIndex = ref(getRandomIndex());

    const onClick = () => {
      currentIndex.value = getRandomIndex()
    }
  
    return {
      currentIndex,
      onClick,
    }
  }
}
</script>

<style scoped>
  .game-max-mode {
    font-size: 45vw;
  }
  p {
    margin: 0;
  }
</style>