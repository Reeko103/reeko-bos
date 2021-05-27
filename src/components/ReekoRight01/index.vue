<template>
<div>
  <!-- 综合总览左侧 -->
  <ul class="overview animate__animated animate__bounceInLeft" :class="leftOut">
      <li>
          <div class="top">
              <countTo class="num" :startVal='0' :endVal='1704' :duration='10000'></countTo>
              <div class="compare">
                <p>较昨日</p>
                <p class="difference">+103</p>
              </div>
          </div>
          <div class="decorate"></div>
          <span class="text">今日楼栋总人数</span>
      </li>
      <li>
          <div class="top">
              <countTo class="num two" :startVal='0' :endVal='468' :duration='10000'></countTo>
              <div class="compare">
                <p>较昨日</p>
                <p class="difference">+28</p>
              </div>
          </div>
          <div class="decorate"></div>
          <span class="text">今日车辆总数</span>
      </li>
      <li>
          <div class="top">
              <countTo class="num three" :startVal='0' :endVal='15' :duration='10000'></countTo>
              <div class="compare">
                <p>较昨日</p>
                <p class="difference">-4</p>
              </div>
          </div>
          <div class="decorate"></div>
          <span class="text">今日事件总数</span>
      </li>
      <li>
          <div class="top">
            <div>
                <countTo class="num four" :startVal='0' :endVal='7' :duration='10000'></countTo>吨
            </div>
          </div>
          <div class="decorate"></div>
          <span class="text">今日碳排放总量</span>
      </li>
      <li>
          <div class="top">
              <div>
                <countTo class="num" :startVal='0' :endVal='5' :duration='10000'></countTo>吨
            </div>
          </div>
          <div class="decorate"></div>
          <span class="text">今日碱排放总量</span>
      </li>

      <!-- 开关 -->
      <img v-if="leftOutStatus" @click="switchL(1)" class="switchL" src="@/assets/icon/home/reekoRight01/leftBg01.png">
      <img v-else @click="switchL(2)" class="switchL" src="@/assets/icon/home/reekoRight01/leftBg02.png">
  </ul>
  <div class="reekoRight animate__animated animate__bounceInRight" :class="inAndOut">
    <div class="content">
      <img class="newImg" src="@/assets/icon/home/reekoRight01/img01.png">
      <!-- <img class="Title" src="@/assets/icon/home/reekoRightT01.png">
      <div class="parkInformation">
        <p>园区名称：两江国际</p>
        <p>建成年份：2016年</p>
        <p>物业公司： 四川瑞华励宝企业管理有限公司</p>
        <p>产权归属： 成都瑞华一九九商业管理有限公司</p>
        <p>办公租金： 7元/㎡/天 ~ 8.5元/㎡/天</p>
        <p>园区地址： 成都市天府大道东段208号</p>
      </div>
      <ul class="list">
        <li>
          <span class="num num01"><countTo :startVal='0' :endVal='28034' :duration='10000'></countTo></span>
          <span>总面积（㎡）</span>
        </li>
        <li>
          <span class="num num02"><countTo :startVal='0' :endVal='2' :duration='10000'></countTo></span>
          <span>楼宇数量</span>
        </li>
        <li>
          <span class="num"><countTo :startVal='0' :endVal='1640' :duration='10000'></countTo></span>
          <span>办公人数</span>
        </li>
        <li>
          <span class="num "><countTo :startVal='0' :endVal='58' :duration='10000'></countTo></span>
          <span>办公区域</span>
        </li>
      </ul>
      <img class="Title" src="@/assets/icon/home/reekoRightT02.png">
      <ul class="listB">
        <li>
          <span>今日总客量</span>
          <span class="num"><countTo :startVal='0' :endVal='6900' :duration='10000'></countTo></span>
        </li>
        <img class="reekoRightT05" src="@/assets/icon/home/reekoRightT05.png">
        <li>
          <span>滞留人数</span>
          <span class="num"><countTo :startVal='0' :endVal='2170' :duration='10000'></countTo></span>
        </li>
        <img class="reekoRightT05" src="@/assets/icon/home/reekoRightT05.png">
        <li>
          <span>重点对象</span>
          <span class="num num03"><countTo :startVal='0' :endVal='140' :duration='10000'></countTo></span>
        </li>
      </ul>
      <div id="visitor"></div>
      <img class="Title" src="@/assets/icon/home/reekoRightT03.png">
      <img class="reekoRightT06" src="@/assets/icon/home/reekoRightT06.png">
      <ul class="listVideo">
        <li>
          <span>视频监控总量</span>
          <span class="num"><countTo :startVal='0' :endVal='1568' :duration='10000'></countTo></span>
        </li>
        <li>
          <span>重点对象</span>
          <span class="num num02"><countTo :startVal='0' :endVal='1422' :duration='10000'></countTo></span>
        </li>
      </ul> -->
    </div>
    <!-- 开关 -->
    <img v-if="status" @click="switchC(1)" class="switch" src="@/assets/icon/home/Building/enter.png">
    <img v-else @click="switchC(2)" class="switch" src="@/assets/icon/home/Building/out.png">
  </div>
</div>
</template>

<script>
import countTo from 'vue-count-to'; /// 数字滚动
import * as echarts from 'echarts';
import "echarts-liquidfill";
export default {
  components: { countTo  },
  data () {
    return {
      inAndOut: '',
      status: true,
      leftOut: '',
      leftOutStatus: true,
    }
  },
  mounted () {
    //this.inits("visitor") /// 初始化
    /// 3秒后关闭右侧部分
    setTimeout(()=>{
      this.inAndOut = 'enter'
      this.status = false
      this.leftOut = 'enterL'
      this.leftOutStatus = false
    },4000)
  },
  methods: {
    switchL(e){
      switch(e){
        case 1:
          this.leftOut = 'enterL'
          this.leftOutStatus = false
          break;
        case 2:
          this.leftOut = 'outL'
          this.leftOutStatus = true
          break;
      }
    },
    switchC(e){
      switch(e){
        case 1:
          this.inAndOut = 'enter'
          this.status = false
          break;
        case 2:
          this.inAndOut = 'out'
          this.status = true
          break;
      }
    },
    addNumClass(){ ///
      this.seeGkpw = true
      // this.$refs.s.classList.add('animate__pulse');
      // setTimeout(()=>{
      //     this.$refs.s.classList.remove('animate__pulse');
      // }, 800);
    },
    inits (id) {
      let visitorChart = echarts.init(document.getElementById(id))
      let option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  lineStyle: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(0, 255, 233,0)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(255, 255, 255,1)',
                          }, {
                              offset: 1,
                              color: 'rgba(0, 255, 233,0)'
                          }],
                          global: false
                      }
                  },
              },
          },
          grid: {
              top: '15%',
              left: '5%',
              right: '5%',
              bottom: '15%',
              // containLabel: true
          },
          xAxis: [{
              type: 'category',
              axisLine: {
                  show: true
              },
              splitArea: {
                  // show: true,
                  color: '#f00',
                  lineStyle: {
                      color: '#f00'
                  },
              },
              axisLabel: {
                  color: '#fff'
              },
              splitLine: {
                  show: false
              },
              boundaryGap: false,
              data: ['00:00', '06:00', '12:00', '18:00', '21:00'],

          }],

          yAxis: [{
              type: 'value',
              min: 0,
              // max: 140,
              splitNumber: 4,
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: 'rgba(255,255,255,0.1)'
                  }
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  show: false,
                  margin: 20,
                  textStyle: {
                      color: '#d1e6eb',

                  },
              },
              axisTick: {
                  show: false,
              },
          }],
          series: [{
                  name: '今日总客量',
                  type: 'line',
                  smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 0,
                  // lineStyle: {
                  //     normal: {
                  //         color: "#00ca95",
                  //         shadowColor: 'rgba(0, 0, 0, .3)',
                  //         shadowBlur: 0,
                  //         shadowOffsetY: 5,
                  //         shadowOffsetX: 5,
                  //     },
                  // },
                  // label: {
                  //     show: true,
                  //     position: 'top',
                  //     textStyle: {
                  //         color: '#00ca95',
                  //     }
                  // },
                  itemStyle: {
                      color: "#00ca95",
                      borderColor: "#fff",
                      borderWidth: 3,
                      shadowColor: 'rgba(0, 0, 0, .3)',
                      shadowBlur: 0,
                      shadowOffsetY: 2,
                      shadowOffsetX: 2,
                  },
                  tooltip: {
                      show: false
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(0,202,149,0.3)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(0,202,149,0)'
                              }
                          ], false),
                          shadowColor: 'rgba(0,202,149,0.9)',
                          shadowBlur: 20
                      }
                  },
                  data: [1.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
              },
              {
                  name: '注册总量',
                  type: 'line',
                  smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 0,
                  // lineStyle: {
                  //     normal: {
                  //         color: "#00ca95",
                  //         shadowColor: 'rgba(0, 0, 0, .3)',
                  //         shadowBlur: 0,
                  //         shadowOffsetY: 5,
                  //         shadowOffsetX: 5,
                  //     },
                  // },
                  // label: {
                  //     show: true,
                  //     position: 'top',
                  //     textStyle: {
                  //         color: '#00ca95',
                  //     }
                  // },

                  itemStyle: {
                      color: "#00ca95",
                      borderColor: "#fff",
                      borderWidth: 3,
                      shadowColor: 'rgba(0, 0, 0, .3)',
                      shadowBlur: 0,
                      shadowOffsetY: 2,
                      shadowOffsetX: 2,
                  },
                  tooltip: {
                      show: false
                  },
                  areaStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(0,202,149,0.3)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(0,202,149,0)'
                              }
                          ], false),
                          shadowColor: 'rgba(0,202,149, 0.9)',
                          shadowBlur: 20
                      }
                  },
                  data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
              },
          ]
      };
      // 使用刚指定的配置项和数据显示图表。
      visitorChart.setOption(option);
          //随着屏幕大小调节图表
          window.addEventListener("resize", () => {
            visitorChart.resize();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
// 综合总览
.overview{position: absolute;top: 80px;left: 12px;z-index: 1; display: flex;flex-direction: column; align-items: center; justify-content: space-around; width: 210px; background:url("../../assets/icon/home/reekoRight01/leftBg.png") no-repeat;background-size: 100% 100%;
    height: 530px;
    li{color: #BEC0C3; font-size: 12px;
    width: 160px;
      .top{display: flex;align-items: center;
      justify-content: space-between;
        .num{font-size: 36px;
        font-weight: 900;
        color: #3DEDE3;
        margin-right: 20px;}
        .two{color: #FD925B;}
        .three{color: #FFDB5C}
        .four{color: #5CFF99}
        .compare{
          font-size: 10px;color: #CCC9C9;
          .difference{color: #FC6538;font-size: 12px;padding-top: 5px;}
        }
        
      }
      .decorate{width: 100%;height: 1px;@include bgGradualChange(left,#5BC5F9,#4BA7F8);margin: 8px 0;}
      .text{font-size: 14px;color: #CCC9C9;}
    }
    .switchL{width: 27px;height: 40px; position: absolute;top: calc(50% - 20px);right: -27px;z-index: 1;cursor: pointer;}
}


// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: calc(100% - 100px);
  .content{height: 981px; display: flex; flex-direction: column; justify-content: space-around;
  .newImg{width: 100%;height: 100%;}
    .Title{width: 320px;height: 30px;margin: 10px 0 20px;}
    // 园区信息
    .parkInformation{padding: 0 16px;font-size: 12px;
      p{padding-bottom: 16px;}
    }
    .list{
        display: flex;align-items: center;padding: 20px 0;
        li{
          width: 25%;
          display: flex;flex-direction: column;align-items: center;justify-content: center;
          border-right: 1px solid #1789C1;
          .num{padding-bottom: 12px;font-size: 22px;color: #45C2FF;}
          .num01{color: #40F1DB;}
          .num02{color: #FF642B;}
        }
        li:last-child{
          border-right: none;
        }
    }
    // 访客数据
    .listB{display: flex;align-items: center;justify-content: space-around;
      li{width: 32%;display: flex;flex-direction: column;align-items: center;justify-content: center;
        .num{padding-top: 12px;font-size: 18px;}
        .num03{color: #0DEBC3;}
      }
      .reekoRightT05{width: 2px;height: 37px;}
    }
    // 设备检测
    .reekoRightT06{width: 348px;height: 104px;}
    // 视频检测
    .listVideo{display: flex;align-items: center; justify-content: space-around;padding-top: 20px;
      li{width: 111px;height: 61px;background-size: 100% 100%;font-size: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center;
        .num{font-size: 18px;padding-top: 14px;}
        .num02{color: #34FFE0;}
      }
      li:nth-child(1){
        background:url("../../assets/icon/home/reekoRightT04-1.png") no-repeat;
      }
      li:nth-child(2){
        background:url("../../assets/icon/home/reekoRightT04-2.png") no-repeat;
      }
    }
    #visitor{width: 100%;height: 180px;}
  }
  // 开关
  .switch{
    position: absolute;top: calc(50% - 32px);left: -36px;z-index: 1;width: 36px;height: 64px;cursor: pointer;
  }
}
.enter{
  transition: right .5s;
  right: -405px;
}
.out{
  transition: right .5s;
  right: 12px;
}
.enterL{
  transition: left .5s;
  left: -210px;
}
.outL{
  transition: left .5s;
  left: 12px;
}
</style>
