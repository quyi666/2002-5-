<template>
    <div class="wzl-box">
    <!-- 头部标题 -->
    <header>
      <img src="@/assets/img/log1.png" alt />
    </header>
    <!-- 轮播图布局 -->
    <div class="wzl-loans">
      <img src="@/assets/img/loans.jpg" alt />
    </div>
    <!-- 标题布局 -->
    <div class="wzl-title">
      <span>申请房先森装修贷</span>
    </div>
    <!-- 申请 -->
    <div class="wzl-form">
      <van-form  border >
        <van-field
          name="用户名"
          label="电话"
        />
        <van-field
          name="用户名"
          label="小区名"
        />
        <van-field
          name="用户名"
          label="建筑面积"
        />
        <div style="margin: 16px;">
          <van-button block type="info" native-type="submit" color="#feb605">立即申请</van-button>
        </div>
      </van-form>
    </div>
    <!-- 申请流程 -->
    <div class="wzl-title">
      <span>申请流程</span>
    </div>
    <!-- 在线预约 -->
    <div class="wzl-ioc">
        <div>
            <i class="iconfont icon-pencle"></i>
            <p>01</p>
            <p>在线预约</p>
        </div>
        <div>
            
            <i class="iconfont icon-audit"></i>
            <p>01</p>
            <p>在线预约</p>
        </div>
        <div>
            
            <i class="iconfont icon-loans"></i>
            <p>01</p>
            <p>在线预约</p>
        </div>
    </div>
    
    <!-- 申请流程 -->
    <div class="wzl-title">
      <span>申请条件</span>
    </div>
    <div class="wzl-tiao">
        <div>
            <i class="iconfont icon-social-security"></i>
            <p>社保缴纳记录</p>
        </div>
        <div>
            <i class="iconfont icon-document"></i>
            <p>购房资料或房产证</p>
        </div>
        <div>
            <i class="iconfont icon-building"></i>
            <p>房产局拉房产证明</p>
        </div>
        <div>
            <i class="iconfont icon-bank"></i>
            <p>没有银行违约的信用记录</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
//主题盒子结构
.wzl-box {
  width: 100%;
  //头部标题布局
  header {
    width: 100%;
    img {
      width: 100%;
    }
  }
  //轮播图布局样式
  .wzl-loans {
    width: 100%;
    img {
      width: 100%;
    }
  }
  //标题申请方先森
  .wzl-title {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #cccc;
    text-align: center;
    span {
      width: 100px;
      height: 80px;
      line-height: 80px;
      font-size: 22px;
    }
  }
  .wzl-form{
      width: 80%;
      margin: 15px auto;
  }
  .wzl-ioc{
      width: 100%;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      justify-content: space-between;
      div{
          width: 30%;
          height: 200px;
          border: 1px solid #39c893;
          text-align: center;
          i{
              color: #39c893;
              font-size: 60px;
              width: 400px !important;
              height: 400px;
              padding: 15px;
              border: 1px solid #39c893;
              border-radius: 50%;
              line-height: 110px;
          }
      }
  }
  .wzl-tiao{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
       justify-content: space-around;
      justify-content: space-between;
      div{
        width: 45%;
        height: 200px;
        border: 1px solid #cccccc;
        text-align: center;
        i{
              color: white;
              font-size: 60px;
              width: 400px !important;
              height: 400px;
              padding: 15px;
            //   border: 1px solid #39c893;
                background: #39c893;
              border-radius: 50%;
              line-height: 120px;
          }
          
          p{
              font-size: 18px;
              font-weight: bold;
          }
      }
  }
}
//主体盒子结束
</style>
