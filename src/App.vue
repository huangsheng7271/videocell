<template>
  <test-field></test-field>
</template>

<script>

import TestField from "./components/TestField .vue"

export default {
  //组件名
  name: 'App',
  //子组件
  components: {
    TestField
  },
  //数据
  data: () => ({
    
  }),
}
</script>

<style scoped>
#app{
  text-align: center;
}
</style>
