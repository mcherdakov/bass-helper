<template>
  <label><input type='checkbox' v-model='showNotes'/>Show notes</label>
  <div class='game-max-mode'>
    <p v-if='scales.length' @click='onClick'>{{ shuffledScales[currentIndex].name }}</p>
  </div>
  <p v-if='showNotes' class='notes'>
    <span v-for='note in shuffledScales[currentIndex].notes' :key='note'> 
      <strong class='start-note' v-if='note === startFrom'>{{ note + ' ' }}</strong>
      <span v-else>{{ note + ' ' }}</span>
    </span>
  </p>
</template>

<script>
import { ref } from 'vue'
import { shuffle, getRandomElem } from '../utils/random'

export default {
  props: {
    scales: {
      required: true,
    }
  },
  setup(props) {
    const shuffledScales = ref(shuffle(props.scales))
    const currentIndex = ref(0);
    const showNotes = ref(true);
    const startFrom = ref(getRandomElem(shuffledScales.value[currentIndex.value].notes));

    const onClick = () => {
      currentIndex.value = (currentIndex.value + 1) % props.scales.length;
      startFrom.value = getRandomElem(shuffledScales.value[currentIndex.value].notes);
    }
  
    return {
      shuffledScales,
      currentIndex,
      startFrom,
      showNotes,
      onClick,
    }
  }
}
</script>

<style scoped>
  .game-max-mode {
    font-size: 45vmin;
  }
  .notes {
    font-size: 5vmin;
  }
  .start-note {
    color: rgb(170, 170, 26);
  }
  p {
    margin: 0;
  }
</style>