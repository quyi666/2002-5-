<template>
  <div class="wzl-box">
    <header>
      <img src="@/assets/img/log2.png" alt />
    </header>
    <div class="wzl-log3">
      <img src="@/assets/img/log3.png" alt />
    </div>
    <div class="wzl-list">
      <span>方先森简介</span>

      <img src="@/assets/img/log5.png" alt />
    </div>
    <div class="wzl-conte">
      <span>
        方先森互联网装修平台有杭州瑞壹网络科技有限公司与2015年成立上线。方先森立足刚需房。专注于家庭装修
        服务，利用互联网装修，供应链，金融进行融合，多维度实现用户对设计师，公长，工地。材料等上线选择体验，方先森以自营的模式真正意义上过滤掉传统的装修公司利润，将利润让给业主。方先森与银行合作的专项装修贷款能够解决业主装修资金问题
      </span>
    </div>

    <div class="wzl-list">
      <span>我们是谁我们如何与众不同</span>
    </div>
    <div class="wzl-log">
      <img src="@/assets/img/log4.png" alt />
    </div>
    <div class="zui">
      <span>服务热线：400-9977-658</span>
      <!-- 右对齐 -->
      <van-row type="flex" justify="end">
        <van-col span="6">触摸板</van-col>
        <van-col span="6">电脑版</van-col>
        <van-col span="6">关于我们</van-col>
        <van-col span="6">联系我们</van-col>
      </van-row>
    </div>
    <footer>
        @2016 sirfang.com 刚需要装修就找方先森
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.wzl-box {
  width: 100%;
  header {
    img {
      width: 100%;
    }
  }
  .wzl-log3 {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .wzl-list {
    width: 100%;
    text-align: center;
    span {
      width: 100%;
      line-height: 100px;
      text-align: center;
      font-weight: bold;
    }
    img {
      width: 100%;
    }
  }
  .wzl-conte {
    width: 100%;
    span {
      padding: 10px;
    }
  }
  .wzl-log {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .zui {
    width: 100%;

    text-align: center;
    span {
      text-align: center;
      line-height: 30px;
    }
  }
  footer{
    margin-top: 10px;
    width: 100%;
    height: 60px;
    background: whitesmoke;
    text-align: center;
    line-height: 60px;
    color: #cccccc;
  }
}
</style>
