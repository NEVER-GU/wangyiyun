<template>
  <div>
    <a v-show="gotop" href="" class="back" @click.prevent="toTop">回到顶部</a>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  components: {},
  data() {
    return {
      gotop: false
    }
  },

  computed: {},
  mounted() {
    // 监听屏幕滑动
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    // 获取屏幕滑动决定是否显示goback
    handleScroll(e) {
      const scrolltop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    },
    // 回到顶部
    toTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang='scss' scoped>
.back {
  display: block;
  position: fixed;
  text-indent: -9999px;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background: url("../../static/image/sprite.png");
  background-position: -265px -47px;
  outline: none;
}
</style>
