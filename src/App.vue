<template>
  <div id="app" class="app-wapper">
    <div class="button-wapper">
      <a-button type="primary" shape="round" size="large" class="button-shadow" style="margin-top:5rem">
        立即登陆
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  //组件名
  name: 'App',
  //子组件
  components: {
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

.ant-btn{
  box-shadow:0 2px 4px rgb(0 0 0 / 8%);
}
</style>
