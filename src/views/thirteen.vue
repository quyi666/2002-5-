<template>
    
  <div>
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
    <div class="content">
      <div id="pic">
        <img src="@/assets/切图/case/case.jpg" alt="" />
        <div class="left">
          <p>399元/m 半包装套餐</p>
          <p>
            特惠：可选300元/m品牌主材包
            <span>已经预约295套</span>
          </p>
        </div>
      </div>
      <div id="pic">
        <img src="@/assets/切图/case/case1.jpg" alt="" />
        <div class="left">
          <p>399元/m 半包装套餐</p>
          <p>
            特惠：可选300元/m品牌主材包
            <span>已经预约295套</span>
          </p>
        </div>
      </div>
      <p></p>
      <div class="text">
        <p>房先森互联网家装有别于传统装修公司与其他装修中</p>
        <p>介平台，以自用模式整合设计师与项目经理，杜绝项目转</p>
        <p>包外包，利用互联网将工地进行在线全景直播，通过去中</p>
        <p>间环节，提供装修套餐+个性化定制服务。</p>
      </div>
      <div class="footer">
        <div class="tel">
          <i class="iconfont icon-tel"></i>
          服务热线：400-9977-658
        </div>
        <ul>
          <li>触屏版</li>
          <li>电脑版</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
      <div class="img">
  <img src="@/assets/切图/1.jpg" alt=""> 
      </div>
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
.van-col {
  img {
    width: 100px;
    height: 40px;
  }
  i {
    color: gray;
    position: relative;

    span {
      position: relative;
      top: 18px;
      right: 27px;
    }
  }
}
.van-col:nth-child(2) {
  position: relative;
  left: 85px;
  top: 10px;
}
.content {
  background: #f4f4f4;
}
#pic {
  margin-top: 20px;
  background: white;
  img {
    width: 100%;
    height: 100%;
  }
}
.left {
  height: 80px;
  p {
    height: 20px;
    span {
      height: 20px;
      background: red;
      padding-left: 50px;
    }
  }
}
.text {
  background: white;
}
.footer {
  background: white;
  height: 66px;
  .tel {
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    padding-left: 30px;
    li {
      flex: 1;
    }
  }
}
img{
  width: 100%;
  height: 80px;
}
</style>