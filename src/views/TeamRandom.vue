<template>
  <div class="random-type" :key="key">
    <div v-for="(size, idx) in typeRandom" :key='idx'>
      <r-block
        :size='size'
        :id='idx'
        @change-block='changeBlock'>
        <h3 class="text-center" v-if="typeRandom.length !== 1">кошик {{ (idx+1) }}</h3>
      </r-block>
      <br>
    </div>
    <button class="btn btn-secondary btn-lg w-100" :disabled='!isFull' @click="random">Жеребкування</button>
  </div>
</template>

<script>
import RBlock from '@/components/R-Block'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      allPlayers: [],
      isFull: false,
      key: 1
    }
  },
  methods: {
    changeBlock (block, id) {
      this.allPlayers[id] = block
      this.checkIsFull()
    },
    checkIsFull () {
      this.isFull = true
      console.log(this.allPlayers)
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
  computed: {
    ...mapGetters([
      'typeRandom'
    ])
  },
  watch: {
    typeRandom () {
      this.key++
    }
  },
  components: {
    RBlock
  }
}
</script>
