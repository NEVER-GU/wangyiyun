<template>
  <div class="main">
    <a href="" class="main-head">
      <slot name="Anchor-img"> <img src="../../static/image/chengli.jpg" alt=""></slot>
    </a>
    <div class="info">
      <p>
        <slot name="Anchor-name"> <a href="#">陈立</a></slot>
        <sup />
      </p>
      <slot name="Anchor-introduce"><p>心理学家、美食家陈立教授</p></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Anchor',
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
  .main-head{
    float: left;
    width: 40px;
    margin-right: 10px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    img{
      width: 40px;
      height: 40px;
      box-shadow:0 0 1px #333333 inset;
      border: 0;
    }
  }
  .info{
    float: left;
    width: 160px;
    line-height: 21px;
    p{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #666;
      font-size: 12px;
      a{
        display: inline-block;
        zoom: 1;
        max-width: 88%;
        line-height: 21px;
        vertical-align: middle;
        overflow: hidden;
        color: #000;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
      }
      a:hover{
        text-decoration: underline;
      }
      sup{
        margin-top: -1px;
        width: 11px;
        height: 13px;
         background: url('../../static/image/icon.png');
        background-position: 0 1px;
        font-size: 100%;
        font-style: normal;
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        line-height: 21px;
      }
    }
  }
}
</style>
