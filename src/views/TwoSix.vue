<template>
  <div class="random-type">
    <div class="" v-for="(size, idx) in sizes" :key='idx'>
      <r-block
        :size='size'
        :id='idx'
        @change-block='changeBlock'>
        <h3 class="text-center" v-if="sizes.length !== 1">кошик {{ (idx+1) }}</h3>
      </r-block>
      <br>
    </div>
    <button class="btn btn-secondary btn-lg w-100" :disabled='!isFull' @click="random">Жеребкування</button>
  </div>
</template>

<script>
import RBlock from '@/components/R-Block'

export default {
  data () {
    return {
      sizes: [4, 4, 4],
      allPlayers: [],
      isFull: false
    }
  },
  methods: {
    changeBlock (block, id) {
      this.allPlayers[id] = block
      this.checkIsFull()
    },
    checkIsFull () {
      this.isFull = true
      this.allPlayers.forEach(el => {
        el.forEach(el => {
          if (el.name === '') {
            this.isFull = false
          }
        })
      })
    },
    random () {
      this.$store.dispatch('startRandom', this.allPlayers)
      this.$router.push('result')
    }
  },
  components: {
    RBlock
  }
}
</script>
