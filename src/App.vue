<template>
  <div>Hello {{ NAME }}</div>
</template>
<script>
export default {
  created() {
    this.NAME = 'World'
  },
}
</script>
<style>
div {
  background-color: blue;
}
</style>
