<template>
  <!-- 文章详情页（分享） -->
  <div class="container">
    <div class="header">
      <div class="header_imgbox">
        <img src="../../assets/切图/logo.png" class="header_img" />
      </div>
      <div class="header_title">装修预算</div>
      <div class="header_navbar">
        <van-icon name="wap-nav" class="header_nav_icon" />
        <span class="header_nav_tex">导航</span>
      </div>
    </div>
    <div class="main">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item class="swiper_box">
          <img src="../../assets/切图/house_info.jpg" class="swiper_img" />
        </van-swipe-item>
        <van-swipe-item class="swiper_box">
          <img src="../../assets/切图/house_info.jpg" class="swiper_img" />
        </van-swipe-item>
      </van-swipe>
      <div class="nav_bar_bread">房先森 / 装修攻略 / 装修预算 / 正文</div>
      <div class="main_tex">
        <h3 class="main_tex_title_tex">装修预算注意事项</h3>
        <div class="bind">
          <div class="main_tex_title_date">
            <van-icon name="underway-o" class="title_icon" />
            <span>2016-07-09</span>
          </div>
          <div class="main_tex_title_date">
            <van-icon name="eye" class="title_icon" />
            <span>115</span>
          </div>
        </div>
        <div class="main_title">
          <span class="main_title_itwm">客厅装修隔断</span>
          <span class="main_title_itwm">客厅装修图</span>
          <span class="main_title_itwm">客厅装修效果</span>
          <span class="main_title_itwm">客厅装修隔断</span>
          <span class="main_title_itwm">客厅装修图</span>
          <span class="main_title_itwm">客厅装修效果</span>
        </div>
        <div class="main_message">
          <span class="main_tex">
            导语：在装修时如果没有提前做好装修的预算，很容易造成最后开支过大，添置很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢？
          </span>
          <div class="main_img_box">
            <img src="../../assets/切图/banner1.jpg" class="main_img" />
          </div>
        </div>
        <div class="all_share">
          <van-button plain type="primary" size="large"
            >点击展开全文</van-button
          >
          <van-button
            round
            icon="plus"
            type="primary"
            class="share"
          ></van-button>
          <van-button
            round
            icon="plus"
            type="danger"
            class="share"
          ></van-button>
          <van-button plain type="primary" size="large"
            >进入装修预算</van-button
          >
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_title">猜你喜欢</div>
      <div class="bottom_item">
        <img src="../../assets/切图/common/icon_close.png" class="bottom_img" />
        <div class="bottom_box_item">
          <div class="bottom_item_title">遇到有这样房子的男人就嫁了吧</div>
          <div class="bottom_item_message">
            <div class="bottom_tex_title_date">
              <van-icon name="underway-o" class="title_icon" />
              <span>2016-07-09</span>
            </div>
            <div class="bottom_tex_title_date">
              <van-icon name="eye" class="title_icon" />
              <span>115</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_item">
        <img src="../../assets/切图/common/icon_close.png" class="bottom_img" />
        <div class="bottom_box_item">
          <div class="bottom_item_title">遇到有这样房子的男人就嫁了吧</div>
          <div class="bottom_item_message">
            <div class="bottom_tex_title_date">
              <van-icon name="underway-o" class="title_icon" />
              <span>2016-07-09</span>
            </div>
            <div class="bottom_tex_title_date">
              <van-icon name="eye" class="title_icon" />
              <span>115</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_item">
        <img src="../../assets/切图/common/icon_close.png" class="bottom_img" />
        <div class="bottom_box_item">
          <div class="bottom_item_title">遇到有这样房子的男人就嫁了吧</div>
          <div class="bottom_item_message">
            <div class="bottom_tex_title_date">
              <van-icon name="underway-o" class="title_icon" />
              <span>2016-07-09</span>
            </div>
            <div class="bottom_tex_title_date">
              <van-icon name="eye" class="title_icon" />
              <span>115</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_item">
        <img src="../../assets/切图/common/icon_close.png" class="bottom_img" />
        <div class="bottom_box_item">
          <div class="bottom_item_title">遇到有这样房子的男人就嫁了吧</div>
          <div class="bottom_item_message">
            <div class="bottom_tex_title_date">
              <van-icon name="underway-o" class="title_icon" />
              <span>2016-07-09</span>
            </div>
            <div class="bottom_tex_title_date">
              <van-icon name="eye" class="title_icon" />
              <span>115</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_item">
        <img src="../../assets/切图/common/icon_close.png" class="bottom_img" />
        <div class="bottom_box_item">
          <div class="bottom_item_title">遇到有这样房子的男人就嫁了吧</div>
          <div class="bottom_item_message">
            <div class="bottom_tex_title_date">
              <van-icon name="underway-o" class="title_icon" />
              <span>2016-07-09</span>
            </div>
            <div class="bottom_tex_title_date">
              <van-icon name="eye" class="title_icon" />
              <span>115</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    // background-color: skyblue;
    height: 4rem;
    width: 100%;
    padding: 0.25rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 99;
    .header_imgbox {
      height: 3.5rem;
      width: 11rem;
      // background-color: red;
      .header_img {
        height: 3.5rem;
      }
    }
    .header_title {
      height: 3.5rem;
      line-height: 3.5rem;
      width: 7rem;
      //   background-color: purple;
      text-align: center;
      font-size: 1.6rem;
      padding-right: 4rem;
    }
    .header_navbar {
      height: 3.5rem;
      width: 2.5rem;
      color: gray;
      //   background-color: red;
      .header_nav_icon {
        display: block;
        width: 2.5rem;
        text-align: center;
        height: 1.65rem;
        line-height: 1.65rem;
        font-size: 2.5rem;
      }
      .header_nav_tex {
        display: block;
        width: 2.5rem;
        text-align: center;
        height: 1.65rem;
        line-height: 1.7rem;
        font-size: 1.2rem;
      }
    }
  }
  .main {
    margin-top: 4rem;
    .my-swipe {
      width: 100%;
      background-color: #39a9ed;
      .swiper_box {
        width: 100%;
        .swiper_img {
          width: 100%;
        }
      }
    }
    .nav_bar_bread {
      width: 21.1rem;
      height: 2rem;
      background-color: lightgray;
      margin: 0.5rem;
      padding: 0.3rem;
      line-height: 2rem;
    }
    .main_tex {
      width: 23rem;
      margin: 1rem 0 2rem;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      justify-content: space-around;
      .main_tex_title_tex {
        width: 23rem;
        margin: 0;
      }
      .bind {
        width: 23rem;
        //   height: 1.5rem;
        border-bottom: 1px gray solid;
        display: flex;
        box-sizing: border-box;
        padding-left: 6rem;
        .main_tex_title_date {
          height: 1.4rem;
          line-height: 1.4rem;
          color: gray;
          padding: 0.5rem;
          .title_icon {
            line-height: 1.5rem;
          }
        }
      }
      .main_title {
        margin-top: 1rem;
        color: gray;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .main_title_itwm {
          display: inline-block;
          margin: 0.3rem;
          padding: 0.2rem;
          border: 1px gray solid;
          border-radius: 1.5rem;
        }
      }
      .main_message {
        width: 23rem;
        text-align: left;
        .main_tex {
          text-align: left;
          color: gray;
          line-height: 1.5rem;
        }
        .main_img_box {
          text-align: center;
          .main_img {
            width: 20rem;
          }
        }
      }
      .all_share {
        width: 23rem;
        margin: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .share {
          width: 4rem;
          border-radius: 2rem;
          height: 4rem;
          margin: 0.5rem;
        }
        button {
          width: 20rem;
          border-radius: 1rem;
        }
      }
    }
  }
  .bottom{
      width: 22rem;
      margin: 0.5rem;
      .bottom_title{
          padding: 0.5rem;
          border-left: 1px green solid;
      }
      .bottom_item{
          width: 21rem;
          padding: 0.5rem 0;
          .bottom_img{
              width: 5rem;
              height: 5rem;
          }
          .bottom_box_item{
              width: 16rem;
              float: right;
              .bottom_item_title{
                  font-size: 1.1rem;
                  height: 1.1rem;
                  line-height: 1.1rem;
              }
              .bottom_item_message{
                  height: 1rem;
                  margin-top: 2rem;
                  display: flex;
                  justify-content: space-around;
                  .bottom_tex_title_date{
                      color: gray;
                  }
              }
          }
      }
  }
}
</style>