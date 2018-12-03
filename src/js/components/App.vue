<template>
  <div>
    <h1 :title="title">{{ this.title }}</h1>
  </div>
</template>


<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'eli-vue-scaffold'
    }
  }
}
</script>


<style lang="scss">
</style>
