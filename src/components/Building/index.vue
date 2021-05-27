<template>
<div>
  <!-- 楼层 -->
  <div class="layerNum">
      <div class="top">
          <img src="@/assets/icon/home/Operation/num01-1.png">
          <ul class="list">
              <li v-for="(list,index) in layerNumD" :key="index"
                :class="{ active : index == layerNumI }"
                @click="layerNumClass(index)" 
              >{{list}}</li>
          </ul>
          <img src="@/assets/icon/home/Operation/num01-2.png">
      </div>
      <div ref="s" class="num animate__animated">{{layerNumV}}</div>
  </div>
  <!-- 导航 -->
  <ul class="nav animate__animated animate__bounceInLeft">
      <li v-for="(list,index) in navData" :key="index"
        :class="{ active : index == navIndex }" 
        @click="navClass(index)"
      >
          <img :class="list.class " :src="list.img">
          <span>{{list.name}}</span>
      </li>
  </ul>
  <!-- 照明 -->
  <div v-show="navIndex == 0" class="lighting animate__animated animate__bounceIn">
    <div class="titl">
      <div>照明管理</div>
      <div class="decorate"></div>
    </div>
    <div class="switch">
      <div class="left">
        <span class="close"></span><span class="closeT">灯光关闭中</span>
        <span class="open"></span><span class="openT">灯光照明中</span>
      </div>
      <div class="right">
        <span class="text">灯光总开关</span>
        <el-switch
          v-model="lighting"
          @change="lightingChange"
          active-color="#FBAD31"
          inactive-color="#A1A1A1">
          </el-switch>
      </div>
    </div>
    <!-- 灯光列表 -->
    <ul class="list">
      <li 
      v-for="(list,index) in lightingData" :key="index"
        @click="handActive(list.name,index)" :class="{active:checkedGroup.includes(list.name)}">{{list.name}}</li>
    </ul>
    <div class="titl">
      <div>照明用电统计</div>
      <div class="decorate"></div>
    </div>
    <ul class="statistics">
      <li>
        <span class="text">楼层季度用电</span>
        <span class="num">1698.02 KW</span>
      </li>
      <li>
        <span class="text">楼层季度用电</span>
        <span class="num">1698.02 KW</span>
      </li>
      <li>
        <span class="text">楼层季度用电</span>
        <span class="num">1698.02 KW</span>
      </li>
    </ul>
  </div>

  <!-- 门禁 -->
  <div v-show="navIndex == 1" class="lighting animate__animated animate__bounceIn">
    <div class="titl">
      <div>门禁管理</div>
      <div class="decorate"></div>
    </div>
    <div class="switch">
      <div class="left">
        <span class="close"></span><span class="closeT">门禁关闭中</span>
        <span class="open"></span><span class="openT">门禁开启中</span>
      </div>
      <div class="right">
        <span class="text">门禁总开关</span>
        <el-switch
          v-model="accessControl"
          @change="accessControlChange"
          active-color="#FBAD31"
          inactive-color="#A1A1A1">
          </el-switch>
      </div>
    </div>
    <!-- 门禁列表 -->
    <ul class="list">
      <li 
      v-for="(list,index) in accessControlData" :key="index"
        @click="accessControlActive(list.name,index)" :class="{active:accessControlGroup.includes(list.name)}">{{list.name}}</li>
    </ul>
  </div>

  <!-- 空调 -->
  <div v-show="navIndex == 3" class="lighting animate__animated animate__bounceIn">
    <div class="titl">
      <div>空调管理</div>
      <div class="decorate"></div>
    </div>
    <div class="switch">
      <div class="left">
        <span class="close"></span><span class="closeT">空调关闭中</span>
        <span class="open"></span><span class="openT">空调开启中</span>
      </div>
      <div class="right">
        <span class="text">空调总开关</span>
        <el-switch
          v-model="airConditioner"
          @change="airConditionerChange"
          active-color="#FBAD31"
          inactive-color="#A1A1A1">
          </el-switch>
      </div>
    </div>
    <!-- 空调列表 -->
    <ul class="list">
      <li 
      v-for="(list,index) in airConditionerData" :key="index"
        @click="airConditionerActive(list.name,index)" :class="{active:airConditionerGroup.includes(list.name)}">{{list.name}}</li>
    </ul>
  </div>

  <!-- 资产 -->
  <img v-show="navIndex == 5" class="assets animate__animated animate__bounceIn" src="@/assets/icon/home/Operation/img06-1.png">

  <div class="reekoRight animate__animated animate__bounceInRight" :class="inAndOut">
    <div class="content">
      <img class="img01" src="@/assets/icon/home/Building/img01.png">
    </div> 
    <!-- 开关 -->
    <img v-if="status" @click="switchC(1)" class="switch" src="@/assets/icon/home/Building/enter.png">
    <img v-else @click="switchC(2)" class="switch" src="@/assets/icon/home/Building/out.png">
  </div>

  <!-- 灯光事件 -->
  <div v-if="dgwg" class="dangerousEvents animate__animated animate__rubberBand">
    <span class="close" @click="dgwg = false">×</span>
    <div class="cont">
      <div class="top">
        <img class="callThePolice01" src="@/assets/icon/home/callThePolice01.png">
        <span><span class="large">警告</span> 待处理</span>
      </div>
      <p class="tips">灯光未关报警！！</p>
    </div>
    <button ref="s" @click="seedgwg = true" class="see animate__animated">点击查看</button>
  </div>

  <!-- 查看 -->
  <div v-if="seedgwg && dgwg" @click="seedgwg = false" class="seeDangerousEvents animate__animated animate__rubberBand">
    <video class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
  </div>

  <!-- 危险人物事件 -->
  <div v-if="wxrw" class="dangerousEvents wxrw animate__animated animate__rubberBand">
    <span class="close" @click="wxrw = false">×</span>
    <div class="cont">
      <div class="top">
        <img class="callThePolice01" src="@/assets/icon/home/callThePolice01.png">
        <span><span class="large">警告</span> 待处理</span>
      </div>
      <p class="tips">危险人物报警！！</p>
    </div>
    <button ref="s" @click="seewxrw = true" class="see animate__animated">点击查看</button>
  </div>

  <!-- 查看 -->
  <div v-if="seewxrw && wxrw" @click="seewxrw = false" class="seeDangerousEvents seewxrw  animate__animated animate__rubberBand">
    <video class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
  </div>

  <!-- 资产移走事件 -->
  <div v-if="zcyz" class="dangerousEvents zcyz animate__animated animate__rubberBand">
    <span class="close" @click="zcyz = false">×</span>
    <div class="cont">
      <div class="top">
        <img class="callThePolice01" src="@/assets/icon/home/callThePolice01.png">
        <span><span class="large">警告</span> 待处理</span>
      </div>
      <p class="tips">资产移走报警！！</p>
    </div>
    <button ref="s" @click="seezcyz = true" class="see animate__animated">点击查看</button>
  </div>

  <!-- 查看 -->
  <div v-if="seezcyz && zcyz" @click="seezcyz = false" class="seeDangerousEvents seezcyz  animate__animated animate__rubberBand">
    <video class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
  </div>

  <!-- 灭火器事件 -->
  <div v-if="mhq" class="dangerousEvents mhq animate__animated animate__rubberBand">
    <span class="close" @click="mhq = false">×</span>
    <div class="cont">
      <div class="top">
        <img class="callThePolice01" src="@/assets/icon/home/callThePolice01.png">
        <span><span class="large">警告</span> 待处理</span>
      </div>
      <p class="tips">灭火器移走报警！！</p>
    </div>
    <button ref="s" @click="seemhq = true" class="see animate__animated">点击查看</button>
  </div>

  <!-- 查看 -->
  <div v-if="seemhq && mhq" @click="seemhq = false" class="seeDangerousEvents seemhq  animate__animated animate__rubberBand">
    <video class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
  </div>


  <div class="assetDetails animate__animated animate__bounceIn" v-if="assetDetailsStatus">
    <div class="top">
      <span>资产信息</span>
      <img @click="assetDetailsStatus = false" class="close" src="@/assets/icon/home/Building/img02.png">
    </div>
    <ul class="lists">
      <li>
        <span>固定资产状态：</span>
        <span v-if="assetDetailsData.status == 1">使用中</span>
        <span v-else-if="assetDetailsData.status == 2">损坏</span>
        <span v-else-if="assetDetailsData.status == 3">闲置</span>
        <span v-else-if="assetDetailsData.status == 4">报废</span>
        <span v-else-if="assetDetailsData.status == 5">遗失</span>
      </li>
      <li>
        <span>资产名称：</span><span>{{assetDetailsData.title}}</span>
      </li>
      <li>
        <span>资产编号：</span><span>{{assetDetailsData.number}}</span>
      </li>
      <li>
        <span>资产型号：</span><span>{{assetDetailsData.model_number}}</span>
      </li>
      <li>
        <span>启用日期：</span><span>{{assetDetailsData.start_date}}</span>
      </li>
      <li>
        <span>存放地点：</span><span>{{assetDetailsData.position}}</span>
      </li>
      <li>
        <span>保管人：</span><span>{{assetDetailsData.custodian}}</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { wmjOpen,monitorRtmp,assetsInfo } from '@/api/home' /// 接口 
import countTo from 'vue-count-to'; /// 数字滚动
import Liquidfill from '@/components/Liquidfill'    /// 水波球
export default {
  components: { countTo,Liquidfill  },
  data () {
    return {
      layerNumD: ['B1','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'], //* 楼层数据
      layerNumI: 2,  //* 楼层索引
      layerNumV: 'F1', //* 当前楼层
      inAndOut: '',
      status: true,
      navIndex: -1,
      navData: [{class:'img01', name:'照明',img:require('@/assets/icon/home/lightingN.png')}
      ,{class:'img02',name:'门禁',img:require('@/assets/icon/home/accessControlN.png')}
      ,{class:'img03',name:'摄像头',img:require('@/assets/icon/home/Operation/img01-3N.png')}
      ,{class:'img04',name:'空调',img:require('@/assets/icon/home/airConditionerN.png')}
      ,{class:'img05',name:'消防栓',img:require('@/assets/icon/home/Operation/img01-5N.png')}
      ,{class:'img06',name:'资产',img:require('@/assets/icon/home/Operation/img01-6N.png')}],
      /// 照明
      lighting: false,
      checkedGroup: [],
      lightingData: [{name: '卫生间'},{name: '楼层过道'},{name: '501'},{name: '502'},{name: '503'}],
      /// 门禁
      accessControl: false,
      accessControlGroup: [],
      accessControlData: [{name: '501'},{name: '502'},{name: '503'},{name: '504'},{name: '505'}],
      /// 空调
      airConditioner: false,
      airConditionerGroup: [],
      airConditionerData: [{name: '501'},{name: '502'},{name: '503'},{name: '504'},{name: '505'}],

      dgwg: false,
      seedgwg: false,
      wxrw: false,
      seewxrw: false,
      zcyz: false,
      seezcyz: false,
      mhq: false,
      seemhq: false,
      assetDetailsData: {}, /// 资产详情数据
      assetDetailsStatus: false, /// 资产详情状态
      unicode: '', /// 资产设备标识
    }
  },
  mounted () {
  
    console.log(this.tab)
    return false
    /// 获取监控视频
    monitorRtmp('V002').then(res => {
          console.log(res,111)
      }).catch(error => {
          console.log(error)
      })
  },
  methods: {
    sing(e){
      console.log(this.unicode)
      assetsInfo(this.unicode).then(res => {
        if(res.data.status == 0){
          this.assetDetailsData = res.data.data
          this.assetDetailsStatus = true
        }
          console.log(res.data.data,111)
      }).catch(error => {
          console.log(error)
      })
    },
    /// 开启灯光
    getWmjOpen () {
      wmjOpen().then(res => {
          console.log(res,111)
      }).catch(error => {
          console.log(error)
      })
    },
    layerNumClass(index){
      this.layerNumI = index
      this.layerNumV = this.layerNumD[index]
      this.addNumClass() /// 楼号动画
    },
    addNumClass(){ /// 楼号动画
      this.$refs.s.classList.add('animate__rubberBand');
      setTimeout(()=>{
          this.$refs.s.classList.remove('animate__rubberBand');
      }, 800);
    },
    /// 灯光总开关
    lightingChange(e){
      console.log(e)
      if(e){
        this.checkedGroup = ['卫生间','楼层过道','501','502','503']
        this.getWmjOpen() /// 开启灯光
      }else{
        this.checkedGroup = []
      } 
    },
    handActive(v,i){ 
     if(this.checkedGroup.includes(v)){
        this.checkedGroup=this.checkedGroup.filter(function (ele){return ele != v;});
     }else{
          this.checkedGroup.push(v);
          this.getWmjOpen() /// 开启灯光
     }
     if(this.checkedGroup.length == 5){
       this.lighting = true
     }else{
       this.lighting = false
     }
    },
    /// 门禁
    accessControlChange(e){
      console.log(e)
      e ? this.accessControlGroup = ['501','502','503','504','505'] : this.accessControlGroup = []
    },
    accessControlActive(v,i){ 
     if(this.accessControlGroup.includes(v)){
        this.accessControlGroup=this.accessControlGroup.filter(function (ele){return ele != v;});
     }else{
          this.accessControlGroup.push(v);
     }
     if(this.accessControlGroup.length == 5){
       this.accessControl = true
     }else{
       this.accessControl = false
     }
    },
    /// 空调
    airConditionerChange(e){
      console.log(e)
      e ? this.airConditionerGroup = ['501','502','503','504','505'] : this.airConditionerGroup = []
    },
    airConditionerActive(v,i){ 
     if(this.airConditionerGroup.includes(v)){
        this.airConditionerGroup=this.airConditionerGroup.filter(function (ele){return ele != v;});
     }else{
          this.airConditionerGroup.push(v);
     }
     if(this.airConditionerGroup.length == 5){
       this.airConditioner = true
     }else{
       this.airConditioner = false
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
    navClass(index){
      this.navData[0].img = require('@/assets/icon/home/lightingN.png')
      this.navData[1].img = require('@/assets/icon/home/accessControlN.png')
      this.navData[3].img = require('@/assets/icon/home/airConditionerN.png')
      this.navData[5].img = require('@/assets/icon/home/Operation/img01-6N.png')
          switch(index){
            case 0:
                this.navIndex = index
                this.navData[index].img = require('@/assets/icon/home/lightingY.png')
                break;
            case 1:
                this.navIndex = index
                this.navData[index].img = require('@/assets/icon/home/mjY.png')
                break;
            case 3:
                this.navIndex = index
                this.navData[index].img = require('@/assets/icon/home/ktY.png')
                break;
            case 5:
                this.navIndex = index
                this.navData[index].img = require('@/assets/icon/home/Operation/img01-6Y.png')
                break;
            default:
                this.navIndex = -1;
        }
           
      }
  }
}
</script>

<style lang="scss" scoped>
/// 资产详情
.assetDetails{position: absolute;top: 227px;right: 463px;z-index: 1;width: 270px;padding:0 25px 40px;background:url("../../assets/icon/home/Building/img02Bg.png") no-repeat;background-size: 100% 100%;color: #ffffff;
  .top{display: flex;align-items: center;justify-content: space-between;font-size: 16px;
  border-bottom: 1px solid #33EAFF;padding: 22px 0 18px;
    .close{width: 16px;height: 16px;cursor: pointer;}
  }
  .lists{
    font-size: 14px;
    li{padding-top: 27px;display: flex;align-items: center;justify-content: space-between;}
  }
}
// 报警
.dangerousEvents{position: absolute;top: 272px;right: 450px;z-index: 1;width: 278px;height: 192px; background:url("../../assets/icon/home/callThePoliceBg.png") no-repeat;background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .close{position: absolute;right: 13px;top: 0;z-index: 1;color: #E12832;font-size: 30px;cursor: pointer;}
  .cont{
    padding-top: 40px;
    .top{
      display: flex;
      align-items: flex-end;
      color: #D9292E;
      font-size: 18px;
      padding-bottom: 10px;
      .callThePolice01{width: 43px;height: 40px;margin-right: 12px;}
      .large{font-size: 26px;}
    }
    .tips{padding: 10px 0 20px;font-size: 16px;color: #ffffff;border-top: 2px solid #ffffff;}
  }
  .see{width: 90px;height: 32px;background: rgba(255, 17, 17, .28);border-radius: 2px;color: #FD4D5F;border: none;cursor: pointer;}
}
.seeDangerousEvents{position: absolute;top: 272px;right: 750px;z-index: 1;width: 278px;height: 192px;
  .vi{width: 100%;height: 100%;object-fit:fill;}
}
.wxrw{top: 80px;}
.seewxrw{top: 80px;}
.zcyz{top: 464px;}
.seezcyz{top: 464px;}
.mhq{top: 656px;}
.seemhq{top: 656px;}
// 导航
.nav{position: absolute;top: 164px;left: 46px;z-index: 1;width: 70px;height: 420px; color: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: space-around; background:url("../../assets/icon/home/Operation/img01Bg.png") no-repeat;background-size: 100% 100%; font-size: 10px;
    li{display: flex;flex-direction: column;align-items: center;justify-content: center;
    cursor: pointer;
        img{width: 20px;height: 20px;margin-bottom: 5px;}
        .img01{width: 22px;height: 28px;}
        .img02{width: 19px;height: 21px;}
        .img03{width: 24px;height: 22px;}
        .img04{width: 27px;height: 19px;}
        .img05{width: 17px;height: 25px;}
    }
    .active{color: #16E5EF;}
}
// 楼层
.layerNum{position: absolute;top: 80px;left: calc(50% - 253px);z-index: 1; display: flex;flex-direction: column;justify-content: center;align-items: center;
color: #ffffff;
    .top{display: flex;align-items: center;justify-content: space-between;
        img{width: 40px;height: 40px;}
        .list{width: 410px;height: 38px;display: flex;align-items: center;justify-content: space-around;font-size: 14px;border: 1px solid #0B6386;border-radius: 4px;margin: 0 7px;cursor: pointer;
            .active{color: #16E5EF;}
        }
    }
    .num{width: 365px;height: 41px;display: flex;align-items: center;justify-content: center;font-size: 28px;font-style:italic;margin-top: 7px;background:url("../../assets/icon/home/Operation/numBg.png") no-repeat;background-size: 100% 100%;}
}
// 照明
.lighting{font-size: 12px;padding: 0 30px;width: 448px;position: absolute;top: 164px;left: 123px;z-index: 1;color: #ffffff;background:url("../../assets/icon/home/Building/lightingBg.png") no-repeat;color: #FFFFFF;background-size: 100% 100%;
  .titl{padding: 19px 0 12px;color: #D0E9EB;border-bottom: 1px solid rgba(51,98,131,0.43);
  position: relative;
    .decorate{width: 31px;height: 1px;background: #19D4ED;position: absolute;left: 0;bottom: 0;z-index: 1;}       
  }
  .switch{display: flex;align-items: center;justify-content: space-between;padding: 18px 0 30px;
    .left{display: flex;align-items: center;
      .close{width: 5px;height: 5px;border: 1px solid #FBAD31;margin-right: 8px;}
      .closeT{color: #FEE5BD;}
      .open{width: 6px;height: 6px;background: #FBAD31;margin: 0 8px 0 20px ;}
      .openT{color: #FBAD31;}
    }
    .right{display: flex;align-items: center;
      .text{color: #C1CCCC;padding-right: 20px;}
    }
  }
  // 灯光列表
  .list{
    display: flex;flex-wrap: wrap;
    li{color: #FCA51C;border: 1px solid #FCA51C;width: 100px;line-height: 36px;border-radius: 2px;margin: 0 5px 10px;cursor: pointer;text-align: center;}
    .active{color: #Ffffff;background: #FBAD31;}
  }
  // 照明用电统计
  .statistics{display: flex;align-items: center;justify-content: space-between;
  padding: 24px 0 50px;
    li{width: 33%;
    display: flex;
    flex-direction: column;
      .text{color: #72B0FF;padding-bottom: 20px;}
      .num{font-size: 15px;}
    }
  }
}
// 资产
.assets{width: 524px;height: 704px;position: absolute;top: 164px;left: 123px;z-index: 1;}
// 右部分
.reekoRight{
  
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: 981px; 
  .content{display: flex; flex-direction: column; justify-content: space-around;
    .img01{width: 100%;height: 100%;}
  }
  // 开关
  .switch{
    position: absolute;top: 414px;left: -36px;z-index: 1;width: 36px;height: 64px;cursor: pointer;
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
</style>