<template>
  <div class="newMore">
    <HeadBar />
    <div class="main">
      <div class="wrap">
        <div class="head f-cb">
          <h3>
            <span>热门新碟</span>
          </h3>
        </div>
        <ul class="body f-cb">
          <li v-for="(item, index) in newwest" :key="index">
            <Newest>
              <template v-slot:img>
                <img :src="item.picUrl" alt="" :title="item.name">
              </template>
              <template v-slot:music>
                <a href="" :title="item.name">{{ item.name }}</a>
              </template>
              <template v-slot:person>
                <a href="" :title="item.company">{{ item.artist.name }}</a>
              </template>
            </Newest>
          </li>
        </ul>
        <div class="head f-cb">
          <h3>
            <span>全部新碟</span>
          </h3>
          <div class="list">
            <a href="">华语</a>
            <span>|</span>
            <a href="">流行</a>
            <span>|</span>
            <a href="">摇滚</a>
            <span>|</span>
            <a href="">民谣</a>
            <span>|</span>
            <a href="">电子</a>
          </div>
        </div>
        <ul class="body f-cb">
          <li v-for="(item, index) in totalPage[currpage - 1]" :key="index">
            <Newest>
              <template v-slot:img>
                <img :src="item.picUrl" alt="" :title="item.name">
              </template>
              <template v-slot:music>
                <a href="" :title="item.name">{{ item.name }}</a>
              </template>
              <template v-slot:person>
                <a href="" :title="item.company">{{ item.artist.name }}</a>
              </template>
            </Newest>
          </li>
        </ul>
        <div class="footer">
          <el-pagination
            background
            :current-page="currpage"
            :page-size="pagesize"
            layout="prev, pager, next"
            :total="newestMore.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <BottomBar />
    <ToTop />
  </div>
</template>

<script>
import { newest } from '../../api/newest'
import { allNewSong } from '../../api/allNewSong'
import HeadBar from '../../components/headBar/HeadBar'
import BottomBar from '../../components/bottomBar/BottomBar'
import ToTop from '../../components/toTop/ToTop'
import Newest from '../../components/newSongMore/Newest'
export default {
  name: 'NewMore',
  components: {
    HeadBar,
    BottomBar,
    ToTop,
    Newest
  },
  data() {
    return {
      newwest: [],
      newestMore: [],
      currpage: 1,
      pagesize: 35,
      totalPage: [],
      dataShow: []
    }
  },

  computed: {},
  mounted() {
    newest()
      .then((res) => {
        this.newwest = res.albums.slice(0, 10)
      })
      .catch((err) => {
        console.log(err)
      })
    allNewSong()
      .then((res) => {
        this.newestMore = res.albums
        for (let i = 0; i < Math.round(this.newestMore.length / 35); i++) {
          this.totalPage[i] = this.newestMore.slice(35 * i, 35 * (i + 1))
          // console.log(this.totalPage[i])
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
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.newMore {
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
.f-cb::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
.head {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
  }
  .list {
    float: left;
    margin: 15px 0 0 20px;
    font-size: 12px;
    a {
      color: #666;
    }
    a:hover {
      text-decoration: underline;
    }
    span {
      margin: 0 10px;
      color: #ccc;
    }
  }
}
.body {
  margin: 20px 0 0 -33px;
  li {
    float: left;
    display: inline-block;
    width: 153px;
    height: 178px;
    overflow: hidden;
    padding: 0 0 30px 33px;
    line-height: 1.4;
    list-style: none;
    a {
      font-size: 14px;
    }
  }
}
.footer {
  .el-pagination {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
