<template>
  <div>
    <h1>Scales</h1>
    <button :disabled='started' @click='changeAll(true)'>Select All</button>
    <button :disabled='started' @click='changeAll(false)'>Reset</button>
    <div class='scales-list'>
      <div 
        v-for='scale in scalesList' 
        :key='scale.id'
      >
        <Scale :scale=scale :started=started @onScaleChanged='scaleChanged(scale.id)'/>
      </div>
    </div>
    <br />
    <span v-if='selectedScales.length > 0'>
      Selected scales: 
      <span v-for='scale in selectedScales' :key='scale.id'>
        {{ scale.name }}, 
      </span>
      <br />
      <button v-if='!started' @click='startGame'>Start!</button>
      <button v-else @click='finishGame'>Finish!</button>
      <p v-if='started'>Click on screen to change scale</p>
      <ScaleTrainerGame v-if='started' :scales=selectedScales />
    </span>
    <span v-else>Select some scales above!</span>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import scales from '../data/scales'
import Scale from './Scale.vue'
import ScaleTrainerGame from './ScaleTrainerGame.vue'

export default {
  components: {
    Scale,
    ScaleTrainerGame,
  },
  setup() {
    const scalesList = ref(scales);
    const started = ref(false);
    const selectedScales = computed(() => {
      return scalesList.value.filter(scale => scale.checked)
    })

    const scaleChanged = (id) => {
      scalesList.value = scalesList.value.map(scale => {
        if (scale.id === id) {
          scale.checked = !scale.checked
        }
        return scale
      })
    }

    const changeAll = (value) => {
      scalesList.value = scalesList.value.map(scale => {
        scale.checked = value
        return scale
      })
    }
    
    const startGame = () => {started.value = true}
    const finishGame = () => {started.value = false}

    return {
      scalesList,
      started,
      selectedScales,
      scaleChanged,
      changeAll,
      startGame,
      finishGame,
    }
  }
}
</script>

<style scoped>
  .scales-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
</style>