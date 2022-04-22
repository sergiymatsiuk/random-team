<template>
  <div class='result'>
    <h2>РЕЗУЛЬТАТИ</h2>
    <r-result-block
      v-for = '(items, idx) in results'
      :key = 'idx'
      :items = 'items'/>
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
      results: []
    }
  },
  created () {
    this.$store.commit('CHANGE_SELECT_RANDOM', false)
    this.results = this.$store.state.arrayAfterRandom
  },
  methods: {
    toMain () {
      this.$store.commit('CHANGE_SELECT_RANDOM', true)
      this.$store.commit('RESET_FINISH_ARRAY')
      this.$router.push('/')
    }
  },
  components: {
    RResultBlock
  }
}
</script>
