<template>
  <div id="app">
     <a-button type="primary" shape="round" size="large" class="button-style">立即登陆</a-button>
     <br><br>
     <a-button type="primary" size="large" class="button-style">立即注册</a-button>
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
.button-style{
  margin-top: 10rem; 
  box-shadow: 0 3px 8px -2px rgb(85 85 85 / 10%), 0 2px 12px 0 rgb(85 85 85 / 8%), 0 1px 12px 0 rgb(85 85 85 / 4%);
}

#app{
  text-align: center;
}
</style>
