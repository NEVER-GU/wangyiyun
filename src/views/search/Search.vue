<template>
  <div class="search">
    <HeadBar>
      <template v-slot:footer>
        <div class="header-footer" style="height: 5px" />
      </template>
    </HeadBar>
    <div class="main">
      <div class="wrap">
        <div class="wrap-search">
          <input v-model="inputName" class="search-input" type="text">
          <a href="#" class="btn" @click.prevent="inputSearch">搜索</a>
        </div>
        <div class="contain">
          <div class="head">
            搜索{{ songName }},找到<em>{{ nums }}</em>单曲
          </div>
          <ul class="nav">
            <li class="fst">
              <a href="" class="change-a">
                <em>单曲</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>歌手</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>专辑</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>视频</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>歌词</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>歌单</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>主播电台</em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>用户</em>
              </a>
            </li>
          </ul>
          <div>
            <div class="n-srchrst">
              <div class="srchsongst">
                <div
                  v-for="(item, index) in songList"
                  :key="index"
                  class="item"
                  :class="index % 2 !== 0 ? 'even' : ''"
                  @mouseenter="enter($event)"
                  @mouseleave="leave($event, index)"
                >
                  <div class="td">
                    <div class="hd">
                      <a href="" class="ply" />
                    </div>
                  </div>
                  <div class="td w0">
                    <div class="sn">
                      <div class="text">
                        <a href="">
                          <b>
                            <span>{{ item.name }}</span>
                          </b>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="td opt notShow">
                    <div>
                      <a class="u-icon" href="" />
                      <span class="fav icn" />
                      <span class="share icn" />
                      <span class="download icn" />
                    </div>
                  </div>
                  <div class="td w1">
                    <div class="text">
                      <a href="#">
                        <span>{{ item.artists[0].name }}</span>
                      </a>
                    </div>
                  </div>
                  <div class="td w2">
                    <div class="text">
                      <a href="#" class="s-fc3">{{ item.album.name }}</a>
                    </div>
                  </div>
                  <div class="td">{{ getTime(item.duration / 1000) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar />
    <ToTop />
  </div>
</template>

<script>
import { search } from '../../api/search'
import HeadBar from '../../components/headBar/HeadBar'
import BottomBar from '../../components/bottomBar/BottomBar'
import ToTop from '../../components/toTop/ToTop'
export default {
  name: 'Search',
  components: {
    HeadBar,
    BottomBar,
    ToTop
  },
  data() {
    return {
      activeName: 'first',
      songList: [],
      songName: '',
      inputName: ''
    }
  },

  computed: {
    nums() {
      return this.songList.length
    }
  },
  mounted() {
    this.songName = this.$route.params.songName
    this.inputName = this.$route.params.songName
    search({ keywords: this.songName })
      .then((res) => {
        this.songList = res.result.songs.slice(0, 20)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    getTime(value) {
      let theTime = value // 秒
      let middle = 0 // 分
      if (theTime > 59) {
        middle = parseInt(theTime / 60)
        theTime = parseInt(theTime % 60)
      }
      theTime < 10 ? (theTime = '0' + theTime) : theTime
      middle < 10 ? (middle = '0' + middle) : middle
      return middle + ':' + theTime
    },
    enter(event) {
      event.target.children[2].className = 'opt show'
      event.target.className = 'change item'
    },
    leave(event, index) {
      event.target.children[2].className = 'opt notShow'
      if (parseInt(index) % 2 === 0) {
        event.target.className = 'item'
      } else {
        event.target.className = ' even item'
      }
    },
    inputSearch() {
      this.songName = this.inputName
      if (this.inputName !== '') {
        search({ keywords: this.inputName }).then((res) => {
          this.songList = res.result.songs.slice(0, 20)
        })
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.search {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  background: #f2f2f2;
}
.main {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.wrap {
  padding: 40px;
}
.wrap-search {
  width: 420px;
  height: 40px;
  margin: 0 auto;
  background: url("../../static/image/sprite.png") no-repeat;
  background-position: 0 0;
  z-index: 10;
  position: relative;
  zoom: 1;
}
.search-input {
  opacity: 1;
  float: left;
  width: 320px;
  height: 17px;
  margin: 12px 0 0 20px;
  padding: 0;
  background: #fff;
  border: none;
  outline: none;
}
.btn {
  float: right;
  width: 50px;
  height: 40px;
  text-indent: -9999px;
  // background: url('../../static/image/sprite.png') no-repeat;
}
.contain {
  .head {
    margin: 28px 0 17px;
    color: #999;
    em {
      color: #c20c0c;
      font-style: normal;
      text-align: left;
      font-size: inherit;
    }
  }
  .nav {
    margin-bottom: auto;
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background: url("../../static/image/tab.png") no-repeat;
    background-position: 0 0;
    background-repeat: repeat-x;
    li {
      position: relative;
      left: -1px;
      float: left;
      height: 39px;
      font-size: 14px;
      list-style: none;
      a {
        float: left;
        height: 39px;
        font-size: 14px;
        padding-left: 2px;
        color: black;
        background: url("../../static/image/tab.png") no-repeat;
        em {
          display: inline-block;
          font-style: normal;
          height: 37px;
          width: 108px;
          padding: 2px 2px 0 0;
          line-height: 37px;
          cursor: pointer;
          text-align: center;
        }
      }
    }
    .change-a {
      background-position: left -90px;
      em {
        background-position: right -90px;
      }
    }
  }
  .n-srchrst {
    margin-top: 20px;
  }
  .srchsongst {
    .item {
      border: 1px solid #fff;
      padding: 10px 10px 8px 18px;
      font-size: 12px;
      height: 23px;
      a {
        color: #333;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .td {
        float: left;
        margin-right: 5px;
      }
      .hd {
        height: 17px;
        width: 17px;
      }
      .ply {
        display: inline-block;
        width: 17px;
        height: 17px;
        margin-right: 15px;
        cursor: pointer;
        background: url("../../static/image/table.png") no-repeat;
        background-position: 0 -103px;
      }
      .w0 {
        width: 370px;
        span {
          font-weight: normal;
        }
      }
      .text {
        position: relative;
        display: inline-block;
        padding-right: 25px;
        width: auto;
        max-width: 100%;
        height: 20px;
        font-weight: normal;
      }
      .opt {
        float: left;
        margin-right: 5px;
        // visibility: hidden;
        .u-icon {
          margin-right: 8px;
          margin-bottom: 3px;
          width: 13px;
          height: 13px;
          background: url("../../static/image/icon.png") no-repeat;
          background-position: 0 -700px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
        }
        .icn {
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 16px;
          cursor: pointer;
          margin: 0 7px 0 0;
        }
        .fav {
          margin-left: 0;
          background: url("../../static/image/table.png") no-repeat;
          background-position: 0 -174px;
        }
        .share {
          background: url("../../static/image/table.png") no-repeat;
          background-position: 0 -195px;
        }
        .download {
          background: url("../../static/image/table.png") no-repeat;
          background-position: -81px -174px;
        }
      }
      .w1 {
        width: 15%;
        margin-right: 12px;
      }
      .text {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          text-decoration: none;
          color: #333;
        }
      }
      .w2 {
        width: 18%;
        margin-right: 12px;
        min-height: 16px;
      }
      .s-fc3 {
        color: #666;
      }
    }
    .even {
      background: #f7f7f7;
      border-color: #f7f7f7;
    }
  }
  .change {
    border: 1px solid #e1e1e1;
    background: #f2f2f2;
  }
  .show {
    visibility: visible;
  }
  .notShow {
    visibility: hidden;
  }
}
</style>
