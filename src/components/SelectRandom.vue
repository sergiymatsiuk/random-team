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
      <li v-for="(random, idx) in typeOfRandom" :key="idx"
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
      link: null,
      selectRandom: null,
      typeOfRandom: [
        {
          title: 'дві по 5',
          link: 'team-random',
          type: [4, 4, 2]
        },
        {
          title: 'дві по 6',
          link: 'team-random',
          type: [4, 4, 4]
        },
        {
          title: 'три по 5',
          link: 'team-random',
          type: [3, 3, 3, 3, 3]
        },
        {
          title: 'три по 6',
          link: 'team-random',
          type: [3, 3, 3, 3, 3, 3]
        },
        {
          title: 'три по 6++',
          link: 'team-random',
          type: [6, 6, 6]
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
        if (this.link !== random.link || window.location.pathname === '/') {
          this.$router.push(random.link)
          this.link = random.link
        }
        this.$store.commit('SET_TYPE_RANDOM', random.type)
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
