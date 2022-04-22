<template>
  <div class="dropdown" v-if="showSelectRandom">
    <button
      class="btn btn-success dropdown-toggle w-100 fs-3"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false">
      {{ title }}
    </button>
    <ul class="dropdown-menu w-100 mt-2">
      <li v-for="random in typeOfRandom" :key="random.link"
          class="dropdown-item"
          @click="changeRandom(random)">{{ random.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title: 'оберіть рандом!',
      selectRandom: null,
      typeOfRandom: [
        {
          title: 'дві по 5',
          link: 'two-five',
          type: [4, 4, 2]
        },
        {
          title: 'дві по 6',
          link: 'two-six',
          type: [4, 4, 4]
        },
        {
          title: 'три по 5',
          link: 'three-five',
          type: [3, 3, 3, 3, 3]
        }
        // {
        //   title: 'рандом',
        //   link: 'random',
        //   type: [12]
        // }
      ]
    }
  },
  methods: {
    changeRandom (random) {
      if (this.title !== random.title) {
        this.$router.push(random.link)
        this.title = random.title
      }
    }
  },
  computed: {
    ...mapState([
      'showSelectRandom'
    ])
  },
  watch: {
    showSelectRandom () {
      this.title = 'давай, але це останній раз'
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    margin-bottom: 40px;
  }
</style>
