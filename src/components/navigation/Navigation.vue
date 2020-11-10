<!--  -->
<template>
  <div>
    <div class="content">
      <div class="title"><slot name="title"><a href="#">热门推荐</a></slot></div>
      <div class="list">
        <slot name="list">
          <a href="">华语</a>
          <span>|</span>
          <a href="">流行</a>
          <span>|</span>
          <a href="">摇滚</a>
          <span>|</span>
          <a href="">民谣</a>
          <span>|</span>
          <a href="">电子</a>
        </slot>
      </div>
      <div class="more">
        <slot name="text"><a href="#">更多</a></slot>
        <i class="arrow">&nbsp;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
.content{
  height: 33px;
  padding: 0 10px 0 34px;
  background: url('../../static/image/index.png')no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
  a{
    color: black;
    text-decoration: none;
  }
  .title{
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .list{
    float: left;
    margin: 7px 0 0 20px;
    font-size: 12px;
    a{
      color: #666;
    }
    a:hover{
      text-decoration:underline;
    }
    span{
      margin: 0 10px;
      color: #ccc;
    }
  }
  .more{
    float: right;
    margin-top: 9px;
    font-size: 12px;
    a{
      color: #666;
    }
    a:hover{
      text-decoration:underline;
    }
    .arrow{
      display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url('../../static/image/index.png');
    background-position: 0 -240px;
    }
  }
}
</style>
