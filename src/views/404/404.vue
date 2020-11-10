<template>
  <div class="hotMore">
    <HeadBar />
    <div class="main">
      <div class="wrap">
        <div class="n-for404">
          <i />
          <p class="text">很抱歉，你要查找的网页找不到</p>
        </div>
      </div>
    </div>
    <BottomBar />
    <ToTop />
  </div>
</template>

<script>
import HeadBar from '../../components/headBar/HeadBar'
import BottomBar from '../../components/bottomBar/BottomBar'
import ToTop from '../../components/toTop/ToTop'
export default {
  name: 'Err',
  components: {
    HeadBar,
    BottomBar,
    ToTop
  },
  data() {
    return {
      personalized: ''
    }
  },
  computed: {},
  mounted() {},

  methods: {}
}
</script>
<style lang='scss' scoped>
.main {
  width: 980px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.f-cb::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
.wrap {
  padding: 40px;
  .content {
    width: 300px;
    margin: 0 auto;
  }
  .n-for404 {
    padding: 125px 0 0;
    text-align: center;
    i {
      background: url("../../static/image/logo.png");
      background-position: 0 -405px;
      width: 270px;
      height: 112px;
      display: inline-block;
      vertical-align: middle;
      font-style: normal;
      text-align: left;
      font-size: inherit;
    }
    .text {
      margin-top: 35px;
      font-size: 18px;
      font-family: "Microsoft Yahei";
      color: #666;
    }
  }
}
</style>
