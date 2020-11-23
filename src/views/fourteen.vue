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
      <div class="main">
        <van-row>
          <van-col>
            <img src="@/assets/xhx.jpg" alt="" />
          </van-col>
          <van-col>
            <div>699全包精装套餐</div>
            <div>价格：<span>￥699/m²</span></div>
            <div>已预约：<span>221套</span></div>
            <div>正式发售：<span>全包套餐火爆预约中</span></div>
          </van-col>
        </van-row>
        <div class="text">
          精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材、一线主材，
          工厂直供F2C模式
        </div>

        <van-row type="flex" justify="center">
          <van-col span="6">套餐详情</van-col>
          <van-col span="6">配置清单</van-col>
          <van-col span="6">施工工艺</van-col>
          <van-col span="6">服务流程</van-col>
        </van-row>
        <div class="img">
          <img src="@/assets/ww.jpg" alt="" />
        </div>
        <div>
          <p>房先森互联网家装有别于传统装修公司与其他装修中</p>
          <p>介平台，以自用模式整合设计师与项目经理，杜绝项目转</p>
          <p>包外包，利用互联网将工地进行在线全景直播，通过去中</p>
          <p>间环节，提供装修套餐+个性化定制服务。</p>
        </div>
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
  img {
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
  .van-col {
    img {
      width: 180px;
    }
  }
  .text {
    background: #fff;
  }
  .img {
    img {
      width: 100%;
    }
  }
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
</style>