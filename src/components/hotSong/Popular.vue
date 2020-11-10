<template>
  <div>
    <div class="head">
      <div class="head-img">
        <slot name="img">
          <img src="" alt="">
        </slot>
      </div>
      <div class="bottom">
        <a class="bottom-icon" href="#" title="播放" />
        <span class="bootom-icon2" />
        <div class="palyCount"><slot name="palyCount"><span /></slot></div>
      </div>
    </div>
    <p class="footer">
      <slot name="message">
        <a href="">xxxxx</a>
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Popular',
  components: {},
  data() {
    return {
    }
  },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.head{
  width: 140px;
  height: 140px;
  position: relative;
  display: block;
  .head-img{
    img{
      display: block;
      width: 100%;
      height: 100%
    }
  }
  .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background: url('../../static/image/coverall.png');
    background-position: 0 -537px;
    color: #ccc;
    .bottom-icon{
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background: url('../../static/image/iconall.png');
    background-position: 0 0;
    display: inline-block;
    }
    .bottom-icon:hover{
      background-position: 0 -60px;
    }
    .bootom-icon2{
      float: left;
      width: 14px;
      height: 11px;
      background: url('../../static/image/iconall.png');
      background-position: 0 -24px;
      margin: 9px 5px 9px 10px;
    }
    .palyCount{
      span{
        // position: absolute;
        // bottom: 0;
        // left: 0;
        // width: 100%;
        // height: 27px;
        // background-position: 0 -537px;
        float: left;
        margin: 7px 0 0 0;
        color: #ccc;
        font-size: 12px;
      }
    }
  }
}
.footer{
  margin: 8px 0 3px;
  font-size: 14px;
  width: 100%;
  height: 57px;
  a{
    color: black;
    font-size: 14px;
    display: inline-block;
    max-width: 100%;
    width: 100%;
    vertical-align: middle;
  }
  a:hover{
    text-decoration: underline;
  }
}
</style>
