<template>
  
  <div class="gutter-example">
    <a-row :gutter="[{xs:0, sm:16, md:24, lg:32},24]">
      <a-col v-for="n in 10" :key="n"
        :xs="24" :sm="24" :md="12" :lg="12" :xl="6"
        class="gutter-row" :span="6">
        <div class="gutter-box">

            <div id="app" class="app-wapper">
                <modal></modal>

                <br>
             
                <a-button type="primary" shape="round" size="large">
                  立即登陆
                </a-button>

                
                <br>
                <br>

                <a-pagination v-model="current" :total="50" show-less-items />

                <br>

                <a-rate value="2" allowHalf character></a-rate>

            </div>

        
        </div>
      </a-col>
    </a-row>
  </div>


</template>

<script>
import Modal from "./Modal.vue"

export default {
  //组件名
  name: 'App',
  //子组件
  components: {
    Modal
  },
  //数据
  data: () => ({
     
  })
}
</script>

<style scoped>
#app{
  text-align: center;
}

.ant-input:focus{
  box-shadow:0 4px 8px rgb(0 0 0 / 12%);
}

.ant-btn{
  box-shadow:0 6px 12px rgb(0 0 0 / 12%);
}

.ant-pagination >>> .ant-pagination-item{
  box-shadow:0 4px 8px rgb(0 0 0 / 8%);

  transition-property: all;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
}
.ant-pagination >>> .ant-pagination-item-link{
  box-shadow:0 4px 8px rgb(0 0 0 / 8%);

  transition-property: all;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
}

.ant-pagination >>> .ant-pagination-item-active {
  font-weight: 500;
  background: #f74455;
  border-color: #f74455;
  box-shadow:0 4px 8px rgb(0 0 0 / 20%);

  transition-property:all;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
}

.ant-pagination >>> .ant-pagination-item-active a{
  color: #FFFFFF;

  transition-property: all;
  transition-duration: 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease;
  transition-delay: 0s, 0s, 0s;
}

.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #f2f3f8;
  padding: 5px 0;
  height: 15rem;
}
</style>
