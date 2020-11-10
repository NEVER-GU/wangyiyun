
<template>
  <div class="main">
    <a class="main-conten" href="">
      <div class="head">
        <slot name="head-img"><img src="" alt=""></slot>
      </div>
      <div class="info">
        <h4>
          <slot name="singer-name"> <span>张惠妹aMEI</span></slot>
        </h4>
        <slot name="singer-message"><p>台湾歌手张惠妹</p></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Singer',
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
.main{
  .main-conten:hover{
   background:  #f4f4f4;
  }
  .main-conten{
    float: left;
    width: 210px;
    height: 62px;
    background: #fafafa;
    text-decoration: none;
    .head{
      float: left;
      width: 62px;
      height: 62px;
      img{
        float: left;
        width: 62px;
        height: 62px;
      }
    }
    .info{
      float: left;
      width: 133px;
      height: 60px;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      color: #666;
      h4{
        margin-top: 8px;
        span{
          width: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          display: inline-block;
        }
      }
      p{
        width: 90%;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>
