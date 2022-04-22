<template>
  <div class="start">
    <h3>{{ titleText }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      titles: [
        'Готові до сильної катки',
        'Шо команди геть гамно?',
        'Ооооо сьогодні кіна не буде....'
      ]
    }
  },
  computed: {
    ...mapState([
      'numberRandom'
    ]),
    titleText () {
      if (this.numberRandom >= this.titles.length) {
        return 'Награли...'
      }
      return this.titles[this.numberRandom]
    }
  },
  watch: {
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
