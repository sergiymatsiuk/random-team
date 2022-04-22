<template>
  <div class="start">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title: 'Ви готові до сильної катки?'
    }
  },
  computed: {
    ...mapState([
      'numberRandom'
    ])
  },
  watch: {
    numberRandom (count) {
      count < 2 ? this.title = 'Шо команди геть гамно?' : this.title = 'Ооооо сьогодні кіна не буде....'
    }
  }
}
</script>

<style lang="scss" scoped>
  .start {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }
</style>
