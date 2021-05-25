<template>
<div class="reekoM">
  <map-one></map-one>
  <!-- 导航 -->
  <ul class="nav animate__animated animate__bounceInLeft">
      <li v-for="(list,index) in navData" :key="index"
        :class="{ active : index == navIndex }" 
        @click="navClass(index)"
      >
        <span>{{list.name}}</span>
      </li>
  </ul>
  <img 
  @click="navIndex = -1"
  v-if="navIndex == 3" 
  class="assets animate__animated animate__bounceIn" 
  src="@/assets/icon/home/reekoRight02/img01.png">
  <!-- 今日排放量 -->
  <div class="discharge animate__animated animate__bounceIn">
      <img src="@/assets/icon/home/reekoRight02/discharge.png">
      <p>今日碳排放量：<span class="num"><countTo :decimals="1" :startVal='0' :endVal='16.4' :duration='10000'></countTo></span> 吨</p>
  </div>
  
  <img class="img06 animate__animated animate__bounceIn" src="@/assets/icon/home/reekoRight02/img06.png">

  <div class="reekoRight animate__animated animate__bounceInRight">
    <img class="img05" src="@/assets/icon/home/reekoRight02/img05.png">
  </div>
</div>
</template>

<script>
import countTo from 'vue-count-to';                               /// 数字滚动
import ConsumePower from '@/components/ConsumePower'              /// 设备耗电圆环
import MapOne from '@/components/MapOne'                          /// 主地图
export default {
  components: { countTo, ConsumePower, MapOne  },
  data () {
    return {
      navIndex: -1,
      navData: [{name:'办公区'},{name:'4楼食堂'},{name:'16楼食堂'},{name:'B1停车场'},{name:'B2停车场'}],
    }
  },
  mounted () {
  },
  methods: {
    navClass(index){
        this.navIndex = index
           
      }
  }
}
</script>

<style lang="scss" scoped>
.reekoM{height: 100%;}
// 导航
.nav{position: absolute;top: 106px;left: 47px;z-index: 1;
    li{display: flex;flex-direction: column;align-items: center;justify-content: center;
    cursor: pointer;
    width: 120px;
    height: 36px;
    border: 1px solid #0E5FC2;
    font-size: 14px;
    background: rgba(16, 55, 162, .38);
    color: #ffffff;
    border-radius: 18px;
    margin-bottom: 7px;
    }
    .active{color: #00deff;border: 1px solid #00deff;background: rgba(0, 222, 255, .20);}
}
// 停车
.assets{width: 403px;height: 495px;position: absolute;top: 100px;left: 176px;z-index: 1;cursor: pointer;}

// 今日排放量
.discharge{position: absolute;top: 80px;right: 435px;z-index: 1;font-size: 20px;
color: #ffffff;
display: flex;
align-items: flex-end;
  img{width: 29px;height: 23px;margin-right: 9px;}
  .num{font-size: 40px;color: #10DEEF;}
}

.img06{width: 87px;height: 516px;position: absolute;top: 220px;right: 630px;z-index: 1;}
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: calc(100% - 100px);
  .img05{width: 100%;height: 100%;}
}
</style>