<!--  -->
<template>
  <div>
    <div class="head">
      <slot name="img"><img src="" alt=""></slot>
      <a href="#" class="msk" />
    </div>
    <div class="music"> <p><slot name="music"><a href="#">晴天</a></slot></p></div>
    <div class="person"><p><slot name="person"><a href="#">周杰伦</a></slot></p></div>
  </div>
</template>

<script>
export default {
  name: 'Newest',
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
a{
  color: black;
  font-size: 12px;
}
a:hover{
  text-decoration: underline;
}
.head{
  margin-bottom: 7px;
  width: 130px;
  height: 130px;
  position: relative;
  display: block;
  img{
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
  a{
    width: 153px;
    height: 130px;
    background: url('../../static/image/coverall.png');
    background-position: 0 -845px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.music{
  p{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
}
.person{
  p{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  a{
    color: #666;
  }
}
</style>
