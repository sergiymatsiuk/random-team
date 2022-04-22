<template>
  <div class="random-type">
    <select class="form-select mb-2" v-model="size" aria-label="Default select example">
      <option selected>{{ size }}</option>
      <option
        v-for="item in hardRandomPlayers"
        :key="item">{{ item }}</option>
    </select>
    <div class="" v-for="(size, idx) in sizes" :key='idx + size'>
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
      hardRandomPlayers: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      size: 'кількість учасників?',
      sizes: [],
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
  watch: {
    size (newSize) {
      console.log(newSize)
      this.sizes[0] = parseInt(newSize)
    }
  },
  components: {
    RBlock
  }
}
</script>
