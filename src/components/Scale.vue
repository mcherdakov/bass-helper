<template>
  <div class='scale'>
    <label>
      <input 
        @click='emitScaleChanged'
        type='checkbox'
        v-model=scale.checked
        :disabled='started'
      />
      {{ scale.name }}
    </label>
  </div>
</template>

<script>
export default {
  emits: ['onScaleChanged'],
  props: {
    scale: {
      required: true,
    },
    started: {
      required: true,
    }
  },
  setup(props, { emit }) {
    const emitScaleChanged = () => {
      emit('onScaleChanged');
    }

    return {
      emitScaleChanged,
    }
  }
}
</script>

<style scoped>
  .scale {
    display: flex;
  }
</style>