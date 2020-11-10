<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-wrap">
        <div class="wrap-left">
          <p class="link">
            <a href="#">服务条款</a>
            <span>|</span>
            <a href="#"> 隐私政策</a>
            <span>|</span>
            <a href="#"> 儿童隐私政策</a>
            <span>|</span>
            <a href="#"> 版权投诉指引</a>
            <span>|</span>
            <a href="#"> 意见反馈 </a>
            <span>|</span>
            <a href="" />
          </p>
          <p class="right wrap-p">
            <span class="sep">网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="#">浙网文[2018]3506-263号</a>
          </p>
          <p class="contact wrap-p">
            <span class="sep">违法和不良信息举报电话：0571-89853516</span>
            <span> 举报邮箱：</span>
            <a href="#">ncm5990@163.com</a>
          </p>
          <p class="last wrap-p">
            <span class="sep">粤B2-20090191-18</span>
            <a href="#">工业和信息化部备案管理系统网站 </a>
            <a href="#" class="police">
              <span class="police-logo" />
              <span class="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
        <ul class="wrap-right">
          <li class="unit">
            <a class="logonew logo-amped" href="" />
            <span class="unit-text text-amped" />
          </li>
          <li class="unit">
            <a class="logonew logo-auth" href="" />
            <span class="unit-text text-auth" />
          </li>
          <li class="unit">
            <a class="logonew logo-musician" href="" />
            <span class="unit-text text-musician" />
          </li>
          <li class="unit">
            <a class="logonew logo-reward" href="" />
            <span class="unit-text text-reward" />
          </li>
          <li class="unit">
            <a class="logonew logo-cash" href="" />
            <span class="unit-text text-cash" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
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
 .footer{
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    clear: both;
    font-size: 12px;
    a:hover{
      text-decoration: underline;
    }
    .footer-content{
      width: 980px;
      margin: 0 auto;
    }
    .footer-wrap::after{
      clear: both;
      content: '.';
      display: block;
      height: 0;
      visibility: hidden;
    }
   .wrap-left{
      float: left;
      width: 520px;
      padding-top: 15px;
      line-height: 24px;
      a{
        color: #666;
      }
      .link{
        a{
          color: #999;
        }
        span{
          margin: 0 8px 0 10px;
          color: #c2c2c2;
        }
      }
      .wrap-p{
        color: #666;
        .sep{
          margin-right: 14px;
        }
      }
      .contact{
        a{
          color: #333;
        }
      }
      .last{
        .police{
          margin-left: 5px;
          font-size: 0;
          .police-logo{
            width: 14px;
            height: 14px;
            background: url('../../static/image/police.png') no-repeat;
            background-size: cover;
            display: inline-block;
            margin-right: 2px;
            vertical-align: -2px;
          }
          .police-text{
            font-size: 12px;
          }
        }
      }
   }
   .wrap-right{
     width: 420px;
     margin-top: 33px;
     float: right;
     .unit{
       float: left;
       width: 60px;
       height: 70px;
       margin-left: 30px;
       text-align: center;
       color: #666;
       list-style: none;
     }
     .unit:first-child {
       margin-left: 0;
     }
     .logonew{
       display: block;
       float: none;
       width: 50px;
       height: 45px;
       margin: 0 auto;
       background:url('../../static/image/foot_enter_new.png');
       background-size: 110px 552px;
     }
     .logo-amped{
        background-position: -60px -456.5px;
        margin-left: 2px;
     }
     .logo-auth{
        background-position: -60px -101px;
        margin-left: 2px;
      }
     .logo-musician{
        background-position: 0 0;
      }
     .logo-reward{
        background-position: -60px -50px;
      }
     .logo-cash{
        background-position: 0 -101px;
      }
      .unit-text{
        display: inline-block;
        margin: 5px 5px 0;
        width: 52px;
        height: 14px;
        background: url('../../static/image/foot_enter_tt.png');
        background-size:180px 139px;
      }
      .text-amped{
        background-position: 0 -108px;
        margin-left: -6px;
        width: 72px;
      }
      .text-auth{
        background-position: -1px -91px;
      }
      .text-musician{
        background-position: 0 0;
      }
      .text-reward{
        background-position: 0 -54px;
      }
      .text-cash{
        background-position: -1px -72px;
      }
   }
  }
</style>
