<!--  -->
<template>
  <div>
    <div class="head-bar">
      <div class="head-bar-header">
        <div class="header-content">
          <h1 class="logo"><a href="#">网易云音乐</a></h1>
          <ul class="list">
            <li class="first">
              <span>
                <a href="#" @click.prevent="goHome">
                  <em>发现音乐</em>
                  <sub class="cor">&nbsp;</sub>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">
                  <em>我的音乐</em>
                  <sub>&nbsp;</sub>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">
                  <em>朋友</em>
                  <sub>&nbsp;</sub>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">
                  <em>商城</em>
                  <sub>&nbsp;</sub>
                </a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">
                  <em>音乐人</em>
                  <sub>&nbsp;</sub>
                </a>
              </span>
            </li>
            <li class="last">
              <span>
                <a href="#">
                  <em>下载客户端</em>
                  <sub>&nbsp;</sub>
                </a>
              </span>
              <sub class="hot">&nbsp;</sub>
            </li>
          </ul>
          <div class="login">
            <a href="">登录</a>
          </div>
          <a href="#" class="creater">创作者中心</a>
          <div class="search">
            <div class="search-cotent">
              <span>
                <input
                  v-model="inputValue"
                  type="text"
                  placeholder="音乐/视频/电台/用户"
                  @keyup.enter="onEnter"
                >
                <!-- <label for="" :style="label" @click="inputClick">音乐/视频/电台/用户</label> -->
              </span>
            </div>
          </div>
        </div>
      </div>
      <slot name="footer">
        <div class="header-footer">
          <div class="footer-conten">
            <ul class="footer-list">
              <li>
                <a href="#">
                  <em class="li-em">推荐</em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em>排行榜</em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em>歌单
                    <span class="icon" />
                  </em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em>主播电台</em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em>歌手</em>
                </a>
              </li>
              <li>
                <a href="#">
                  <em>新碟上架</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadBar',
  components: {},
  data() {
    return {
      label: null,
      inputValue: ''
    }
  },

  computed: {},

  methods: {
    // 搜索获取点击事件
    inputClick() {
      this.label = 'display:none'
    },
    // 将label stayle清空
    blur() {
      this.label = null
    },
    goHome() {
      this.$router.push({ name: 'Home' })
    },
    onEnter() {
      if (this.inputValue !== '') {
        this.$router.push({
          name: 'Search',
          params: { songName: this.inputValue }
        })
      }
      // console.log('相同地址不能跳传')
    }
  }
}
</script>
<style lang='scss' scoped>
a {
  text-decoration: none;
}
.head-bar {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  zoom: 1;
  font-size: 12px;
  .head-bar-header {
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .header-content {
      width: 1100px;
      margin: 0 auto;
      height: 70px;
      .logo {
        float: left;
        width: 176px;
        height: 69px;
        background: url("../../static/image/topbar.png") no-repeat;
        background-position: 0 0;
        a {
          float: left;
          width: 157px;
          height: 100%;
          padding-right: 20px;
          text-indent: -9999px;
        }
      }
      .list {
        float: left;
        li {
          *zoom: 1;
          background-position: right -300px;
          float: left;
          height: 70px;
          font-size: 14px;
          list-style: none;
          span {
            float: left;
            height: 70px;
            font-size: 14px;
            a {
              float: left;
              height: 70px;
              font-size: 14px;
              text-decoration: none;
              padding: 0 19px;
              line-height: 70px;
              color: #ccc;
              em {
                font-style: normal;
                text-align: left;
              }
              .cor {
                display: none;
              }
            }
            a:hover {
              background: #000;
              color: #fff;
            }
          }
        }
        .first {
          position: relative;
        }
        .last {
          position: relative;
          .hot {
            display: block;
            position: absolute;
            top: 21px;
            left: 100px;
            width: 28px;
            height: 19px;
            background: url("../..//static/image/topbar.png") no-repeat;
            background-position: -190px 0;
          }
        }
      }
      .login {
        float: right;
        height: 45px;
        margin: 19px 0 0 20px;
        padding: 0 22px 0 0;
        background: url("../../static/image/topbar.png") no-repeat;
        background-position: right -47px;
        background-image: none;
        a {
          display: block;
          width: 28px;
          margin-top: 7px;
          color: #787878;
        }
        a:hover {
          color: #666;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .creater {
        float: right;
        width: 90px;
        height: 32px;
        margin: 19px 0 0 12px;
        box-sizing: border-box;
        padding-left: 16px;
        border: 1px solid #4f4f4f;
        background-position: 0 -140px;
        line-height: 33px;
        color: #ccc;
        border-radius: 20px;
      }
      .creater:hover {
        border: 1px solid #fff;
      }
      .search {
        float: right;
        width: 158px;
        height: 32px;
        .search-cotent {
          margin-top: 19px;
          background: url("../../static/image/topbar.png") no-repeat;
          background-position: 0 -99px;
          background-color: #fff;
          border-radius: 32px;
          float: right;
          width: 158px;
          height: 32px;
          span {
            display: block;
            position: relative;
            margin: 8px 0 0 30px;
            input {
              opacity: 1;
              color: #333;
              line-height: 16px;
              width: 95%;
              margin: 0;
              padding: 0;
              background: transparent;
              border: none;
              outline: none;
            }
            input::-webkit-input-placeholder {
              /* WebKit browsers */
              color: #9b9b9b;
              font-size: 12px;
              position: relative;
              top: 2px;
            }
            input::-moz-placeholder {
              /* WebKit browsers */
              color: #9b9b9b;
              font-size: 12px;
              position: relative;
              top: 2px;
            }
          }
        }
      }
    }
  }
  .header-footer {
    z-index: 90;
    height: 35px;
    // box-sizing: border-box;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
    .footer-conten {
      width: 1100px;
      height: 34px;
      margin: 0 auto;
      .footer-list {
        float: left;
        padding-left: 180px;
        li {
          float: left;
          list-style: none;
          a {
            height: 34px;
            text-align: center;
            color: #fff;
            em {
              font-style: normal;
              display: inline-block;
              height: 20px;
              padding: 0 13px;
              margin: 7px 17px 0;
              border-radius: 20px;
              line-height: 21px;
            }
          }
          a:hover {
            em {
              background: #9b0909;
            }
          }
        }
      }
      .li-em {
        background: #9b0909;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;
      }
      .icon {
        display: inline-block;
        position: absolute;
        width: 8px;
        height: 8px;
        // top: 2px;

        background: url("../../static/image/white-r-icon@3x.png");
        background-size: cover;
      }
    }
  }
}
</style>
