<template>
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
      <van-dropdown-menu>
        <van-dropdown-item title="筛选" ref="item1">
          <div class="title_item">
            <div class="item_title">级别</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">总监</van-button>
            <van-button plain hairline type="primary">主任</van-button>
            <van-button plain hairline type="primary">优秀</van-button>
          </div>
          <div class="title_item">
            <div class="item_title">收费</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">0-50元/㎡</van-button>
            <van-button plain hairline type="primary">50-100元/㎡</van-button>
            <van-button plain hairline type="primary">100-150元/㎡</van-button>
            <van-button plain hairline type="primary">200元/㎡以上</van-button>
          </div>
          <div style="padding: 5px 16px">
            <van-button type="danger" size="large" block @click="onConfirm1">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="风格" ref="item2">
          <div class="title_item">
            <div class="item_title">级别</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">总监</van-button>
            <van-button plain hairline type="primary">主任</van-button>
            <van-button plain hairline type="primary">优秀</van-button>
          </div>
          <div class="title_item">
            <div class="item_title">收费</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">0-50元/㎡</van-button>
            <van-button plain hairline type="primary">50-100元/㎡</van-button>
            <van-button plain hairline type="primary">100-150元/㎡</van-button>
            <van-button plain hairline type="primary">200元/㎡以上</van-button>
          </div>
          <div style="padding: 5px 16px">
            <van-button type="danger" size="large" block @click="onConfirm2">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item3">
          <div class="title_item">
            <div class="item_title">级别</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">总监</van-button>
            <van-button plain hairline type="primary">主任</van-button>
            <van-button plain hairline type="primary">优秀</van-button>
          </div>
          <div class="title_item">
            <div class="item_title">收费</div>
            <van-button plain hairline type="primary">不限</van-button>
            <van-button plain hairline type="primary">0-50元/㎡</van-button>
            <van-button plain hairline type="primary">50-100元/㎡</van-button>
            <van-button plain hairline type="primary">100-150元/㎡</van-button>
            <van-button plain hairline type="primary">200元/㎡以上</van-button>
          </div>
          <div style="padding: 5px 16px">
            <van-button type="danger" size="large" block @click="onConfirm3">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
      <van-icon name="search" class="find" />
    </div>
    <div class="main">
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="main_left">
          <van-image round width="7rem" height="7rem" src="icon_logo.png" />
        </div>
        <div class="main_right">
          <div class="main_right_title">
            <span class="name">陈冲</span>
            <span class="right_title">优秀</span>
            <span class="title_rq">
              <span class="title_rq_num">738</span>
              人气
            </span>
          </div>
          <div class="main_right_message">
            <div class="main_right_message_item">
              <span class="message_title">作品:</span>
              <span class="message_tex">8个</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">经验:</span>
              <span class="message_tex">5年</span>
            </div>
            <div class="main_right_message_item">
              <span class="message_title">评价:</span>
              <span class="message_tex">10</span>
            </div>
          </div>
          <div class="main_right_like">
            <span class="main_right_lke_title">擅长风格:</span>
            <span class="main_right_lke_tex"> 现代/美式/简约/新古典 </span>
          </div>
        </div>
      </div>
      <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
      <div class="main_footer">
        <span>
          房先森互联网家装有别于传统装修公司与其他装修中介平台，
          以自营模式整合设计师与项目经路，杜绝项目转包外包，
          利用互联网将工地进行在线全景直播，通过去中间环节，
          提供装修套餐+个性化定制服务。</span
        >
      </div>
    </div>
    <div class="footer"></div>
    <div class="to_top">
        <van-icon name="back-top" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onConfirm1() {
      this.$refs.item1.toggle();
    },
    onConfirm2() {
      this.$refs.item2.toggle();
    },
    onConfirm3() {
      this.$refs.item3.toggle();
    },
  },
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
    // height: 4rem;
    width: 100%;
    padding: 0.25rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: white;
    flex-wrap: wrap;
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
    .van-dropdown-menu {
      width: 80%;
      .title_item {
        background-color: #f4f4f4;
        .item_title {
          width: 100%;
          padding: 1rem;
        }
        .van-button {
          width: 30%;
          margin: 0.2rem;
        }
      }
    }
  }
  .find {
    color: darkgreen;
    font-size: 2rem;
    padding: 0.5rem;
  }
  .main {
    font-size: 12px;
    width: 100%;
    height: 100%;
    margin-top: 8rem;
    margin-bottom: 8rem;
    .show {
      width: 100%;
      height: 100%;
      display: flex;
      border-bottom: 0.8px solid #eaeaea;
      .main_left {
        width: 30%;
      }
      .main_right {
        width: 70%;
        padding: 1rem;
        box-sizing: border-box;
        .main_right_title {
          height: 1.5rem;
          line-height: 1.5rem;
          .name {
            font-size: 1.4rem;
          }
          .right_title {
            width: 2rem;
            background-color: darkgreen;
            color: white;
            border-radius: 0.2rem;
            padding-top: 0.1rem;
            display: inline-block;
            height: 1.2rem;
            line-height: 1.2rem;
            text-align: center;
          }
          .title_rq {
            display: block;
            float: right;
            font-size: 1.3rem;
            color: gray;
            .title_rq_num {
              color: orange;
            }
          }
        }
        .main_right_message {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 0.5rem 0;
          .main_right_message_item {
            width: 30%;
            .message_title {
              font-size: 1.2rem;
            }
            .message_tex {
              font-size: 1.2rem;
              color: gray;
            }
          }
        }
        .main_right_like {
          width: 100%;
          .main_right_lke_title {
            font-size: 1.1rem;
          }
          .main_right_lke_tex {
            font-size: 1.1rem;
            color: gray;
          }
        }
      }
    }
    .main_footer {
      width: 100%;
      padding-top: 1rem;
      font-size: 1.2rem;
      span {
        margin-left: 2.4rem;
      }
    }
  }
}
</style>