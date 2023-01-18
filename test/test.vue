<script>
import { defineProps } from 'vue'
defineProps({
  a: {
    type: String,
    default: 'a'
  }
})
</script>

<template>
  <div class="a"></div>
</template>

<style lang="less">
.a {
  color: red;
}
</style>
