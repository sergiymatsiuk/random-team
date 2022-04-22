<template>
  <div class="input-group mb-2">
    <input type="text" class="form-control" placeholder="add player" v-model="name.name">
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: {}
    }
  },
  mounted () {
    this.name = this.player
  },
  watch: {
    name: {
      deep: true,
      handler () {
        this.$emit('change-name', this.name)
      }
    }
  }
}
</script>
