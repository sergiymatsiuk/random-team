<template>
  <div class="container">
    <select-random/>
    <router-view/>
  </div>
</template>

<script>
import SelectRandom from '@/components/SelectRandom'

export default {
  data () {
    return {
      showSelect: true
    }
  },
  components: {
    SelectRandom
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 30px;
    margin-bottom: 30px;
    min-height: 100%;
  }
</style>
