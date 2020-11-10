<template>
  <div class="home">
    <div class="head-bar">
      <div class="head-bar-header">
        <div class="header-content">
          <h1 class="logo"><a href="#">网易云音乐</a></h1>
          <ul class="list">
            <li class="first">
              <span>
                <a href="#">
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
              </span>
            </div>
          </div>
        </div>
      </div>
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
    </div>
    <div ref="backgroud" class="rotation" style="">
      <div class="wrap">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item, index) in banners" :key="index">
            <a href="#" style="float: left; height: 100%">
              <img
                :src="item.imageUrl"
                alt=""
                style="width: 100%; height: 100%"
              >
            </a>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
        </swiper>
        <a class="swiper-button-prev prev" />
        <a class="swiper-button-next next" />
        <div class="wrap-right">
          <a href="#" class="download">下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span class="shadow" />
          <span class="shadowr" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-left">
        <div class="body-content">
          <div class="content-wrap">
            <Navigation>
              <template v-slot:text>
                <a href="#" @click.prevent="hotMore">更多</a>
              </template>
            </Navigation>
            <ul class="content-ul">
              <li v-for="(item, index) in personalized" :key="index">
                <Popular>
                  <template v-slot:img>
                    <img :src="item.picUrl" alt="">
                  </template>
                  <template v-slot:palyCount>
                    <span>{{ item.playCount | number }}</span>
                  </template>
                  <template v-slot:message>
                    <a href="" :title="item.name">{{ item.name }}</a>
                  </template>
                </Popular>
              </li>
            </ul>
          </div>
          <div class="new-music">
            <Navigation>
              <template v-slot:title>
                <a href="#">新碟上架</a>
              </template>
              <template v-slot:list>
                <div />
              </template>
              <template v-slot:text>
                <a href="#" @click.prevent="newMore">更多</a>
              </template>
            </Navigation>
            <div class="new-music-cotent">
              <div class="container">
                <div class="roll">
                  <swiper
                    ref="mySwiper2"
                    :options="swiperOptions2"
                    style="height: 100%"
                  >
                    <swiper-slide>
                      <ul>
                        <li v-for="(item, index) in newwest1" :key="index">
                          <Newest>
                            <template v-slot:img>
                              <img
                                :src="item.picUrl"
                                alt=""
                                :title="item.name"
                              >
                            </template>
                            <template v-slot:music>
                              <a href="" :title="item.name">{{ item.name }}</a>
                            </template>
                            <template v-slot:person>
                              <a href="" :title="item.company">{{
                                item.artist.name
                              }}</a>
                            </template>
                          </Newest>
                        </li>
                      </ul>
                    </swiper-slide>
                    <swiper-slide>
                      <ul>
                        <li v-for="(item, index) in newwest2" :key="index">
                          <Newest>
                            <template v-slot:img>
                              <img
                                :src="item.picUrl"
                                alt=""
                                :title="item.name"
                              >
                            </template>
                            <template v-slot:music>
                              <a href="" :title="item.name">{{ item.name }}</a>
                            </template>
                            <template v-slot:person>
                              <a href="" :title="item.company">{{
                                item.artist.name
                              }}</a>
                            </template>
                          </Newest>
                        </li>
                      </ul>
                    </swiper-slide>
                  </swiper>
                  <div class="swiper-button-prev left-btn" />
                  <div class="swiper-button-next right-btn" />
                </div>
              </div>
            </div>
          </div>
          <div class="bill">
            <Navigation>
              <template v-slot:title>
                <a href="#">榜单</a>
              </template>
              <template v-slot:list>
                <div />
              </template>
            </Navigation>
            <div class="bill-blist">
              <dl class="blist-dl1">
                <BillTop>
                  <template v-slot:head-img>
                    <a href="#" :title="playlist1.name">
                      <img
                        :src="playlist1.coverImgUrl"
                        alt=""
                      ></a>
                  </template>
                  <template v-slot:bill-message>
                    <a
                      href="#"
                      :title="playlist1.name"
                    ><h3>{{ playlist1.name }}</h3></a>
                  </template>
                </BillTop>
                <dd>
                  <ol>
                    <li
                      v-for="(item, index) in soarSong"
                      :key="index"
                      @mouseenter="enter($event)"
                      @mouseleave="leave($event)"
                    >
                      <span class="number">{{ index + 1 }}</span>
                      <a href="#" :title="item.name">{{
                        item.name | ellipsis
                      }}</a>
                      <div class="oper">
                        <a href="#" class="item-icon icon1" />
                        <a href="#" class="item-icon icon2" />
                        <a href="#" class="item-icon icon3" />
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a href="">查看全部></a>
                  </div>
                </dd>
              </dl>
              <dl class="blist-dl1">
                <BillTop>
                  <template v-slot:head-img>
                    <a
                      href="#"
                      :title="playlist2.name"
                    ><img
                      :src="playlist2.coverImgUrl"
                      alt=""
                    ></a>
                  </template>
                  <template v-slot:bill-message>
                    <a
                      href="#"
                      :title="playlist2.name"
                    ><h3>{{ playlist2.name }}</h3></a>
                  </template>
                </BillTop>
                <dd>
                  <ol>
                    <li
                      v-for="(item, index) in newSong"
                      :key="index"
                      @mouseenter="enter($event)"
                      @mouseleave="leave($event)"
                    >
                      <span class="number">{{ index + 1 }}</span>
                      <a href="#" :title="item.name">{{
                        item.name | ellipsis
                      }}</a>
                      <div class="oper">
                        <a href="#" class="item-icon icon1" />
                        <a href="#" class="item-icon icon2" />
                        <a href="#" class="item-icon icon3" />
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a href="">查看全部></a>
                  </div>
                </dd>
              </dl>
              <dl class="blist-dl3">
                <BillTop>
                  <template v-slot:head-img>
                    <a
                      href="#"
                      title="playlist3.name"
                    ><img
                      :src="playlist3.coverImgUrl"
                      alt=""
                    ></a>
                  </template>
                  <template v-slot:bill-message>
                    <a href="#" title="playlist3.name">
                      <h3>{{ playlist3.name }}</h3></a>
                  </template>
                </BillTop>
                <dd>
                  <ol>
                    <li
                      v-for="(item, index) in selfSong"
                      :key="index"
                      @mouseenter="enter($event)"
                      @mouseleave="leave($event)"
                    >
                      <span class="number">{{ index + 1 }}</span>
                      <a href="#" :title="item.name">{{
                        item.name | ellipsis
                      }}</a>
                      <div class="oper">
                        <a href="#" class="item-icon icon1" />
                        <a href="#" class="item-icon icon2" />
                        <a href="#" class="item-icon icon3" />
                      </div>
                    </li>
                  </ol>
                  <div class="more">
                    <a href="">查看全部></a>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="body-right">
        <div class="profile">
          <div class="info">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <a href="">用户登录</a>
          </div>
        </div>
        <div class="single">
          <h3>
            <span>入驻歌手</span>
            <a href="">查看全部></a>
          </h3>
          <ul class="single-ul">
            <li>
              <Singer>
                <template
                  v-slot:head-img
                ><img
                  src="../../static/image/zhanghuimei.jpg"
                  alt=""
                ></template>
              </Singer>
            </li>
            <li>
              <Singer>
                <template
                  v-slot:head-img
                ><img
                  src="../../static/image/fine.jpg"
                  alt=""
                ></template>
                <template v-slot:singer-name><span>Fine乐团</span></template>
                <template v-slot:singer-message><p>独立音乐人</p></template>
              </Singer>
            </li>
            <li>
              <Singer>
                <template
                  v-slot:head-img
                ><img
                  src="../../static/image/wangxiaoli.jpg"
                  alt=""
                ></template>
                <template v-slot:singer-name><span>萬曉利</span></template>
                <template
                  v-slot:singer-message
                ><p>
                  一位富有浓郁人文色彩的民谣歌手，中国现代民谣的代表人物之一，浮华世界里一位坚定的歌唱者。
                </p></template>
              </Singer>
            </li>
            <li>
              <Singer>
                <template
                  v-slot:head-img
                ><img
                  src="../../static/image/zhaolei.jpg"
                  alt=""
                ></template>
                <template v-slot:singer-name><span>音乐人赵雷</span></template>
                <template v-slot:singer-message><p>民谣歌手</p></template>
              </Singer>
            </li>
            <li>
              <Singer>
                <template
                  v-slot:head-img
                ><img
                  src="../../static/image/wangsanbo.jpg"
                  alt=""
                ></template>
                <template v-slot:singer-name><span>王三博</span></template>
                <template v-slot:singer-message><p>音乐人</p></template>
              </Singer>
            </li>
          </ul>
          <div class="single-footer">
            <a href="">
              <i>申请成为网易云音乐人</i>
            </a>
          </div>
        </div>
        <div class="dj">
          <h3>热门主播</h3>
          <ul>
            <li><Anchor /></li>
            <li>
              <Anchor>
                <template v-slot:Anchor-img>
                  <img src="../../static/image/yanqiu.jpg" alt="">
                </template>
                <template v-slot:Anchor-name>
                  <a href="">DJ艳秋</a>
                </template>
                <template v-slot:Anchor-introduce>
                  <p>著名节目音乐主持人</p>
                </template>
              </Anchor>
            </li>
            <li>
              <Anchor>
                <template v-slot:Anchor-img>
                  <img src="../../static/image/dajuyuan.jpg" alt="">
                </template>
                <template v-slot:Anchor-name>
                  <a href="">国家大剧院古典音乐频道</a>
                </template>
                <template v-slot:Anchor-introduce>
                  <p>国家大剧院古典音乐官方</p>
                </template>
              </Anchor>
            </li>
            <li>
              <Anchor>
                <template v-slot:Anchor-img>
                  <img src="../../static/image/yanqiu.jpg" alt="">
                </template>
                <template v-slot:Anchor-name>
                  <a href="">谢谢收听</a>
                </template>
                <template v-slot:Anchor-introduce>
                  <p>南京电台主持人王馨</p>
                </template>
              </Anchor>
            </li>
            <li>
              <Anchor>
                <template v-slot:Anchor-img>
                  <img src="../../static/image/xiaosu.jpg" alt="">
                </template>
                <template v-slot:Anchor-name>
                  <a href="">DJ晓苏</a>
                </template>
                <template v-slot:Anchor-introduce>
                  <p>独立DJ，CRI环球旅游广播特邀DJ</p>
                </template>
              </Anchor>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <BottomBar />
    <ToTop />
  </div>
</template>

<script>
import { banner } from '../../api/picture'
import { personalized } from '../../api/personalized'
import { newest } from '../../api/newest'
import { playlist } from '../../api/playlist'
import Navigation from '../../components/navigation/Navigation'
import Popular from '../../components/hotSong/Popular'
import Newest from '../../components/newSong/Newest'
import BillTop from '../../components/billTop/BillTop'
import Singer from '../../components/singerList/Singer'
import Anchor from '../../components/radioStation/Anchor'
import BottomBar from '../../components/bottomBar/BottomBar'
import ToTop from '../../components/toTop/ToTop'
export default {
  name: 'Home',
  components: {
    Navigation,
    Popular,
    Newest,
    BillTop,
    Singer,
    Anchor,
    BottomBar,
    ToTop
  },
  filters: {
    ellipsis(value) {
      if (!value) return ''
      if (value.length > 15) {
        return value.slice(0, 14) + '...'
      }
      return value
    },
    // 对收听量进行处理
    number(value) {
      if (!value) return ''
      if (parseInt(value) > 100000) {
        return Math.floor(parseInt(value) / 10000) + '万'
      }
      return value
    }
  },
  data() {
    return {
      // 控制回到顶部的显示于隐藏
      gotop: false,
      // 头部轮播图
      swiperOptions: {
        loop: true,
        speed: 300,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
          // bulletActiveClass: 'my-bullet-active'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          slideChangeTransitionStart() {
            // console.log(this.activeindex)
          }
        }
      },
      // 第二个轮播图
      swiperOptions2: {
        loop: true,
        autoplay: true,
        speed: 1500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      banners: [], // 头部轮播图信息
      personalized: [], // 热门信息
      newwest1: [], // 新碟信息x
      newwest2: [],
      newwest3: [],
      newwest4: [],
      playlist1: {}, // 榜单信息
      playlist2: {},
      playlist3: {},
      soarSong: [], // 飙升歌曲榜
      newSong: [], // 新歌榜
      selfSong: [], // 原创歌曲榜
      inputValue: ''
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    swiper2() {
      return this.$refs.mySwiper2.$swiper
    }
  },
  mounted() {
    // 获取顶部轮播图资源
    banner()
      .then((res) => {
        this.banners = res.banners
      })
      .catch((err) => {
        console.log(err)
      })
    // 获取热门歌曲资源
    personalized()
      .then((res) => {
        this.personalized = res.result.slice(0, 8)
      })
      .catch((err) => {
        console.log(err)
      })
    // 获取新歌资源
    newest()
      .then((res) => {
        this.newwest1 = res.albums.slice(0, 5)
        this.newwest2 = res.albums.slice(5, 10)
        // this.newwest3 = res.albums.slice(10, 15)
        // this.newwest4 = res.albums.slice(15, 20)
      })
      .catch((err) => {
        console.log(err)
      })
    // 获取榜单资源
    playlist({ id: 19723756 })
      .then((res) => {
        this.playlist1 = res.playlist
        this.soarSong = res.playlist.tracks.slice(0, 10)
      })
      .catch((err) => {
        console.log(err)
      })
    playlist({ id: 3779629 })
      .then((res) => {
        this.playlist2 = res.playlist
        this.newSong = res.playlist.tracks.slice(0, 10)
      })
      .catch((err) => {
        console.log(err)
      })
    playlist({ id: 2884035 })
      .then((res) => {
        this.playlist3 = res.playlist
        this.selfSong = res.playlist.tracks.slice(0, 10)
      })
      .catch((err) => {
        console.log(err)
      })
    this.swiper2.slideTo(3, 1000, false)
  },
  methods: {
    // 鼠标移入事件
    enter(event) {
      event.target.children[2].className = 'opre active'
      event.target.children[1].className = 'change-width'
    },
    // 鼠标移出事件
    leave(event) {
      event.target.children[2].className = 'opre'
      event.target.children[1].className = ''
    },
    // 按下enter激活搜索
    onEnter() {
      if (this.inputValue !== '') {
        this.$router.push({
          name: 'Search',
          params: { songName: this.inputValue }
        })
      }
    },
    // 热门更多跳转
    hotMore() {
      this.$router.push({ name: 'HotMore' })
    },
    // 新碟更多跳转
    newMore() {
      this.$router.push({ name: 'NewMore' })
    }
  }
}
</script>

<style lang="scss">
.home {
  background: #f2f2f2;
  font-family: Arial, Helvetica, sans-serif;
  a {
    text-decoration: none;
    // color: #fff;
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
            background: #000;
            position: relative;
            a {
              color: #fff;
            }
            .cor {
              display: block;
              position: absolute;
              left: 50%;
              top: 64px;
              width: 12px;
              height: 7px;
              margin-left: -6px;
              overflow: hidden;
              background: url("../..//static/image/topbar.png") no-repeat;
              background-position: -226px 0;
            }
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
                // top: 2px;
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
  .rotation {
    background: #666;
    .wrap {
      position: relative;
      width: 982px;
      height: 285px;
      margin: 0 auto;
      .swiper-button-prev {
        content: "";
      }
      .swiper-button-next {
        content: "";
      }
      .prev:hover {
        background: url("../../static/image/banner.png");
        background-position: 0 -430px;
      }
      .prev {
        left: -68px;
        background: url("../../static/image/banner.png");
        background-position: 0 -360px;
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -31px;
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        outline: none;
      }
      .next:hover {
        background: url("../../static/image/banner.png");
        background-position: 0 -578px;
      }
      .next {
        right: -68px;
        background: url("../../static/image/banner.png");
        background-position: 0 -508px;
        display: block;
        position: absolute;
        top: 50%;
        margin-top: -31px;
        width: 37px;
        height: 63px;
        text-indent: -9999px;
        outline: none;
      }
    }
    .swiper-container {
      position: relative;
      float: left;
      width: 730px;
      height: 285px;
      margin: 0 auto;
      .my-bullet-active {
        background: red;
        //  background: url('../../static/image/dot_slt.png');
        //  background-position: -16px -343px;
        //  background-position: -16px -343px;
      }
      // --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
      // --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
      // --swiper-navigation-size: 30px;/* 设置按钮大小 */
    }
    .wrap-right {
      position: absolute;
      top: 0;
      z-index: 20;
      right: -1px;
      width: 254px;
      height: 285px;
      background: url("../../static/image/download.png");
      zoom: 1;
      .download {
        display: block;
        width: 215px;
        height: 56px;
        margin: 186px 0 0 19px;
        // background: url('../../static/image/download.png');
        background-position: 0 9999px;
        text-indent: -9999px;
      }
      .download:hover {
        background: url("../../static/image/download.png");
        background-position: 0 -290px;
      }
      p {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  .body {
    width: 980px;
    min-height: 1000px;
    height: auto;
    margin: 0 auto;
    // background: url('../../static/image/wrap1.png') repeat-y 100% 100%;
    // border: 1px solid #d3d3d3;
    // border-width: 0 1px;
    .body-left {
      float: left;
      width: 100%;
      margin-right: -250px;
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      box-sizing: border-box;
      background: url("../../static/image/wrap1.png") repeat-y 100% 100%;
    }
    .body-content {
      float: left;
      margin-right: 251px;
      padding: 20px 20px 40px;
      .content-wrap {
        // padding: 20px 20px 40px;
        .content-ul {
          margin: 20px 0 0 -42px;
          li {
            width: 140px;
            height: 204px;
            // padding-left: 42px;
            float: left;
            display: inline-block;
            width: 140px;
            height: 188px;
            overflow: hidden;
            padding: 0 0 30px 42px;
            line-height: 1.4;
          }
        }
      }
      .new-music {
        clear: both;
        .new-music-cotent {
          position: relative;
          zoom: 1;
          height: 186px;
          margin: 20px 0 37px;
          border: 1px solid #d3d3d3;
          .left-btn {
            left: 4px;
            position: absolute;
            outline: none;
            width: 17px;
            height: 17px;
            background: url("../../static/image/index.png");
            background-position: -260px -75px;
          }
          .container {
            height: 184px;
            padding-left: 16px;
            background: #f5f5f5;
            border: 1px solid #fff;
            position: relative;
            position: relative;
            .roll {
              float: left;
              width: 645px;
              height: 180px;
              overflow: hidden;
              zoom: 1;
              .swiper-button-prev::after {
                content: "";
              }
              .swiper-button-next::after {
                content: "";
              }
              ul {
                position: absolute;
                top: 0;
                width: 645px;
                margin: 28px 0 0 0;
                li {
                  float: left;
                  display: inline;
                  width: 118px;
                  height: 150px;
                  margin-left: 11px;
                  background: url("../../static/image/index.png") no-repeat;
                  background-position: -260px 100px;
                  list-style: none;
                }
              }
            }
          }
          .right-btn {
            position: absolute;
            width: 17px;
            height: 17px;
            outline: none;
            background: url("../../static/image/index.png");
            background-position: -300px -75px;
          }
        }
      }
      .bill {
        .bill-blist {
          height: 472px;
          margin-top: 20px;
          padding-left: 1px;
          background: url("../../static/image/index_bill.png");
          a {
            color: black;
          }
          a:hover {
            text-decoration: underline;
          }
          .number {
            float: left;
            position: relative;
            width: 35px;
            height: 32px;
            margin-left: -35px;
            text-align: center;
            color: #666;
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
          }
          .active {
            float: right;
            width: 82px;
            margin-top: 7px;
            .item-icon {
              float: left;
              width: 17px;
              height: 17px;
              margin-right: 10px;
            }
            .icon1 {
              background: url("../../static/image/index.png");
              background-position: -267px -268px;
            }
            .icon2 {
              margin: 2px 6px 0 0;
              background: url("../../static/image/icon.png");
              background-position: 0 -700px;
              display: inline-block;
              overflow: hidden;
            }
            .icon3 {
              background: url("../../static/image/index.png");
              background-position: -297px -268px;
            }
          }
          .oper {
            display: none;
            float: right;
            width: 82px;
            margin-top: 7px;
            .item-icon {
              float: left;
              width: 17px;
              height: 17px;
              margin-right: 10px;
            }
            .icon1 {
              background: url("../../static/image/index.png");
              background-position: -267px -268px;
            }
            .icon2 {
              margin: 2px 6px 0 0;
              background: url("../../static/image/icon.png");
              background-position: 0 -700px;
              display: inline-block;
              overflow: hidden;
            }
            .icon3 {
              background: url("../../static/image/index.png");
              background-position: -297px -268px;
            }
          }
          .blist-dl1 {
            float: left;
            width: 230px;
            font-size: 12px;
            ol {
              height: 319px;
              margin-left: 50px;
              line-height: 32px;
              li {
                height: 32px;
                list-style: none;
                vertical-align: middle;
                .change-width {
                  width: 80px;
                  display: inline-block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            .more {
              clear: both;
              height: 32px;
              margin-right: 32px;
              text-align: right;
              line-height: 32px;
            }
          }
          .blist-dl3 {
            float: left;
            width: 226px;
            font-size: 12px;
            ol {
              height: 319px;
              margin-left: 50px;
              line-height: 32px;
              li {
                height: 32px;
                list-style: none;
                vertical-align: middle;
                .change-width {
                  width: 80px;
                  display: inline-block;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            .more {
              clear: both;
              height: 32px;
              margin-right: 32px;
              text-align: right;
              line-height: 32px;
            }
          }
        }
      }
    }
    .body-right {
      position: relative;
      float: left;
      width: 248px;
      zoom: 1;
      .profile {
        .info {
          height: 126px;
          padding-top: 0;
          background: url("../../static/image/index.png");
          background-position: 0 0;
          font-size: 12px;
          p {
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color: #666;
          }
          a {
            margin: 0 auto;
            display: block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background: url("../../static/image/index.png");
            background-position: 0 -195px;
          }
          a:hover {
            background-position: -110px -195px;
          }
        }
      }
      .single {
        margin-top: 15px;
        h3 {
          position: relative;
          *zoom: 1;
          height: 23px;
          margin: 0 20px;
          border-bottom: 1px solid #ccc;
          color: #333;
          font-size: 12px;
          span {
            float: left;
            font-size: 100%;
          }
          a {
            float: right;
            font-weight: normal;
            color: #666;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .single-ul {
          margin: 6px 0 14px 20px;
          li {
            float: left;
            margin-top: 14px;
            width: 210px;
            height: 62px;
            background: #fafafa;
            list-style: none;
          }
        }
        .single-ul::after {
          clear: both;
          content: ".";
          display: block;
          height: 0;
          visibility: hidden;
        }
        .single-footer {
          a {
            margin-left: 20px;
            border-radius: 4px;
            color: #333;
            padding: 0 5px 0 0;
            white-space: nowrap;
            display: inline-block;
            height: 31px;
            line-height: 31px;
            overflow: hidden;
            vertical-align: top;
            text-align: center;
            cursor: pointer;
            outline: none;
            background: url("../../static/image/button2.png") no-repeat;
            background-position: right -100px;
            font-size: 12px;
            i {
              width: 170px;
              font-weight: bold;
              color: #333;
              background: url("../../static/image/button2.png") no-repeat;
              background-position: 0 -59px;
              padding: 0 15px 0 20px;
              pointer-events: none;
              display: inline-block;
              height: 31px;
              line-height: 31px;
              overflow: hidden;
              vertical-align: top;
              text-align: center;
              cursor: pointer;
              font-style: normal;
              font-size: inherit;
            }
          }
        }
      }
      .dj {
        margin-top: 30px;
        h3 {
          position: relative;
          font-size: 12px;
          height: 23px;
          margin: 0 20px;
          border-bottom: 1px solid #ccc;
          color: #333;
        }
        ul {
          margin: 20px 0 0 20px;
          li {
            float: left;
            width: 210px;
            height: 50px;
            list-style: none;
          }
        }
      }
    }
  }
}
</style>
