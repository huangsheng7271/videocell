<template>
  <!-- <div id="app" class="app-wapper">
    <div class="button-wapper">
      <a-button type="primary" shape="round" size="large" class="button-shadow" style="margin-top:5rem">
        立即登陆
      </a-button>
    </div>
  </div> -->

  <div class="gutter-example">
    <a-row :gutter="{ xs: 0, sm: 16, md: 24, lg: 32 }">
      <a-col
        :xs="0" :sm="4" :md="6" :lg="8" :xl="10"
        class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col 
        :xs="24" :sm="16" :md="12" :lg="8" :xl="4"
        class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col
        :xs="0" :sm="4" :md="6" :lg="8" :xl="10"
        class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
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

.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
