<template>
    <div>
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
        <!-- 摄像头 -->
        <img @click="navClass" v-show="navIndex == 2" class="camera animate__animated animate__bounceIn" src="@/assets/icon/home/reekoRight05/img03.png">
        <!-- 资产 -->
        <img @click="navClass" v-show="navIndex == 5" class="assets animate__animated animate__bounceIn" src="@/assets/icon/home/Operation/img06-1.png">

        <div class="reekoRight animate__animated animate__bounceInRight" :class="inAndOut">
            <div class="content">
            <img class="img01" src="@/assets/icon/home/reekoRight05/img01.png">
            </div> 
            <!-- 开关 -->
            <img v-if="status" @click="switchC(1)" class="switch" src="@/assets/icon/home/Building/enter.png">
            <img v-else @click="switchC(2)" class="switch" src="@/assets/icon/home/Building/out.png">
        </div>

        <!-- <img class="img02 animate__animated animate__fadeIn" src="@/assets/icon/home/reekoRight05/img02.png"> -->
    </div>
</template>

<script>
import countTo from 'vue-count-to'; /// 数字滚动
export default {
  components: { countTo },
  data () {
    return {
      inAndOut: '',
      status: true,
      navIndex: -1,
      navData: [{class:'img01', name:'照明',img:require('@/assets/icon/home/lightingN.png')}
      ,{class:'img02',name:'门禁',img:require('@/assets/icon/home/accessControlN.png')}
      ,{class:'img03',name:'摄像头',img:require('@/assets/icon/home/Operation/img01-3N.png')}
      ,{class:'img04',name:'空调',img:require('@/assets/icon/home/airConditionerN.png')}
      ,{class:'img05',name:'消防栓',img:require('@/assets/icon/home/Operation/img01-5N.png')}
      ,{class:'img06',name:'资产',img:require('@/assets/icon/home/Operation/img01-6N.png')}],
    }
  },
  mounted () {
    console.log(this.tab)
  },
  methods: {
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
      this.navData[5].img = require('@/assets/icon/home/Operation/img01-6N.png')
      this.navData[2].img = require('@/assets/icon/home/Operation/img01-3N.png')
          switch(index){
            case 2:
                this.navIndex = index
                this.navData[index].img = require('@/assets/icon/home/jkY.png')
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
// 导航
.nav{position: absolute;top: 195px;left: 50px;z-index: 1;width: 70px;height: 420px; color: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: space-around; background:url("../../assets/icon/home/Operation/img01Bg.png") no-repeat;background-size: 100% 100%; font-size: 10px;
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
// 资产
.assets{width: 546px;height: 708px;position: absolute;top: 195px;left: 133px;z-index: 1;cursor: pointer;}
// 摄像头
.camera{width: 404px;height: 318px;position: absolute;top: 195px;left: 133px;z-index: 1;cursor: pointer;}
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: calc(100% - 100px); background:url("../../assets/icon/home/reekoRightBg.png") no-repeat;color: #FFFFFF;background-size: 100% 100%;
  .content{padding: 16px; height: calc(100% - 32px); display: flex; flex-direction: column; justify-content: space-around;
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
// .img02{position: absolute;top: 77px;left: 663px;z-index: 1;width: 365px;height: 41px;}
</style>