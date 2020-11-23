<template>
    
  <div>
    <div class="wrap">
      <div class="header">
        <van-row>
          <van-col span="4">
            <img src="@/assets/切图/logo.png" alt="" />
          </van-col>
          <van-col span="12"> 装修方案</van-col>
          <van-col span="4">
            <i class="iconfont icon-user"> <span> 我的 </span></i>
          </van-col>
          <van-col span="4">
            <i class="iconfont icon-nav"> <span> 导航 </span> </i>
          </van-col>
        </van-row>
      </div>
      <div class="main">弹性滚动区域</div>
      <div class="footer">footer</div>
    </div>

      
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
}

.wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.header,
.footer {
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  text-align: center;
  img{
      width: 100px;
  }
}

.main {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  background: #f4f4f4;
}
</style>