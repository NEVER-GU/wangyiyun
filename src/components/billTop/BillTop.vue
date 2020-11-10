<template>
  <div>
    <div class="top">
      <div class="top-head">
        <slot name="head-img"><img src="" alt=""></slot>
        <a href="" />
      </div>
      <div class="top-footer">
        <a href="#">
          <slot name="bill-message">
            <h3>xxx</h3>
          </slot>
        </a>
        <div class="footer-btn">
          <a href="" class="play" />
          <a href="" class="add" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillTop',
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
.top{
  height: 100px;
  padding: 20px 0 0 19px;
  .top-head{
    float: left;
    display: inline;
    width: 80px;
    height: 80px;
    position: relative;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
    a{
      background: url('../../static/image/coverall.png');
      background-position: -145px -57px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .top-footer{
    float: left;
    width: 116px;
    margin: 6px 0 0 10px;
    a{
      text-decoration: none;
      color: #333;
    }
    a:hover{
      text-decoration: underline;
    }
    h3{
      font-size: 14px;
    }
    .footer-btn{
      margin-top: 10px;
      a{
        display: block;
        float: left;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px;
      }
      .play{
        background: url('../../static/image/index.png');
        background-position: -267px -205px;
      }
      .add{
        background: url('../../static/image/index.png');
        background-position: -300px -205px;
      }
    }
  }
}
</style>
