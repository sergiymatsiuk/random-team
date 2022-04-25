<template>
  <div class="result-block">
    <div
      class="result-item"
      v-for="item in items.team"
      :key="item">
      {{ item }}
    </div>
    <div class="chance" v-if="showOdds">
      {{ items.chance }} %
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    },
    showOdds: {
      type: Boolean
    }
  }
}
</script>
