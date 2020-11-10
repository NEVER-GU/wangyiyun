<template>
  <div class="hotMore">
    <HeadBar />
    <div class="main">
      <div class="wrap">
        <div class="head f-cb">
          <h3>
            <span>全部</span>
            <a href="#">
              <i>选择分类
                <em />
              </i>
            </a>
          </h3>
          <div class="hot">
            <a href="#">热门</a>
          </div>
        </div>
        <ul class="body f-cb">
          <li v-for="(item, index) in totalPage[currpage - 1]" :key="index">
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
        <div class="footer">
          <el-pagination
            background
            :current-page="currpage"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="personalized.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
          <!-- <div class="u-page">
            <a href="#" class=" zbtn zprv">上一页</a>
            <a href="#" class=" zbtn znxt">下一页</a>
          </div> -->
        </div>
      </div>
    </div>
    <BottomBar />
    <ToTop />
  </div>
</template>

<script>
import { personalized } from '../../api/personalized'
import HeadBar from '../../components/headBar/HeadBar'
import BottomBar from '../../components/bottomBar/BottomBar'
import ToTop from '../../components/toTop/ToTop'
import Popular from '../../components/hotSong/Popular'
export default {
  name: 'HotMore',
  components: {
    HeadBar,
    BottomBar,
    ToTop,
    Popular
  },
  filters: {
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
      personalized: '',
      currpage: 1,
      pagesize: 35,
      totalPage: [],
      dataShow: []
    }
  },
  computed: {},
  mounted() {
    // 获取热门歌曲资源
    personalized()
      .then((res) => {
        this.personalized = res.result
        // 将数组切分
        for (let i = 0; i < Math.round(this.personalized.length / 35); i++) {
          this.totalPage[i] = this.personalized.slice(35 * i, 35 * (i + 1))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  methods: {
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currpage = val
    }
  }
}
</script>
<style lang='scss' scoped>
.hotMore {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  background: #f2f2f2;
  a {
    text-decoration: none;
  }
}
.main {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.f-cb::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
.wrap {
  padding: 40px;
}
.head {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
    a {
      font-size: 12px;
      font-weight: normal;
      margin: 2px 0 0 12px;
      color: #333;
      background: url("../../static/image/button2.png") no-repeat;
      background-position: right -100px;
      padding: 0 5px 0 0;
      white-space: nowrap;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      vertical-align: top;
      text-align: center;
      cursor: pointer;
      i {
        color: #0c73c2 !important;
        padding: 0 10px 0 15px;
        background: url("../../static/image/button2.png") no-repeat;
        background-position: 0 -59px;
        pointer-events: none;
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        font-style: normal;
        em {
          margin-left: 5px;
          width: 8px;
          height: 5px;
          background: url("../../static/image/icon.png") no-repeat;
          background-position: -70px -543px;
          display: inline-block;
          overflow: hidden;
          vertical-align: middle;
          text-align: left;
          font-size: inherit;
        }
      }
    }
  }
  .hot {
    height: 29px;
    background: url("../../static/image/button.png") no-repeat;
    background-position: 0 0;
    border-radius: 3px;
    display: inline-block;
    float: right;
    a {
      color: #fff;
      float: left;
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
    }
  }
}
.body {
  margin: 30px 0 0 -50px;
  li {
    float: left;
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    padding: 0 0 30px 50px;
    line-height: 1.4;
    list-style: none;
  }
}
.footer {
  .el-pagination {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
