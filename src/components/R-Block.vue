<template>
  <div class="random-block">
    <slot/>
    <div v-for="player in players" :key="player.id">
      <r-input :player="player" @change-name="ChangeName"></r-input>
    </div>
  </div>
</template>

<script>
import RInput from '@/components/R-Input'

export default {
  props: {
    size: Number,
    id: Number
  },
  data () {
    return {
      players: []
    }
  },
  mounted () {
    for (let i = 0; i < this.size; i++) {
      this.players.push({
        name: '',
        id: i,
        empty: true
      })
    }
  },
  methods: {
    ChangeName (player) {
      this.players[player.id].name = player.name
      this.$emit('change-block', this.players, this.id)
    }
  },
  components: {
    RInput
  }
}
</script>
