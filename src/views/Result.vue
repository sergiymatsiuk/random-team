<template>
  <div class='result'>
    <h2>РЕЗУЛЬТАТИ</h2>
    <r-result-block
      v-for = '(items, idx) in results'
      :key = 'idx'
      :items = 'items'
      :showOdds = 'showOdds'/>
     <button
      v-if="!showOdds"
      class="btn btn-outline-success"
      @click.prevent="generateOdds">Прикинути шанси</button>
    <button
      class="btn btn-outline-secondary"
      @click.prevent="toMain">Треба переділюватися...</button>
  </div>
</template>

<script>
import RResultBlock from '@/components/R-ResultBlock.vue'

export default {
  data () {
    return {
      results: [],
      showOdds: false
    }
  },
  created () {
    this.$store.commit('CHANGE_SELECT_RANDOM', false)
    this.results = this.arrayWithChance
    window.scrollTo(0, 0)
  },
  methods: {
    toMain () {
      this.$store.commit('CHANGE_SELECT_RANDOM', true)
      this.$store.commit('RESET_FINISH_ARRAY')
      this.$router.push('/')
    },
    generateOdds () {
      for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100)
        if (this.results.length === 2) {
          if ((100 / this.results.length) > randomNumber) {
            this.results[0].chance += 10
          } else {
            this.results[1].chance += 10
          }
        }
        if (this.results.length === 3) {
          if ((100 / this.results.length) > randomNumber) {
            this.results[0].chance += 10
          } else if ((100 / this.results.length) < randomNumber && (100 / this.results.length) * 2 > randomNumber) {
            this.results[1].chance += 10
          } else {
            this.results[2].chance += 10
          }
        }
      }
      this.showOdds = true
    }
  },
  computed: {
    arrayWithChance () {
      return this.$store.state.arrayAfterRandom.map(el => {
        return {
          team: el,
          chance: 0
        }
      })
    }
  },
  components: {
    RResultBlock
  }
}
</script>
