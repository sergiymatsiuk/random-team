<template>
    <div class="result-block">
      <div
        class="result-item"
        v-for="item in items"
        :key="item">
        {{ item }}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
