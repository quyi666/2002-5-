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
}
</style>