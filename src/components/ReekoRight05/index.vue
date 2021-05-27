<template>
    <div>
        <!-- 导航 -->
        <ul class="nav animate__animated animate__bounceInLeft">
            <li v-for="(list,index) in navData" :key="index"
              :class="{ active : index == navIndex }" 
              @click="navClass(index)"
            >
                <span>{{list.name}}</span>
            </li>
        </ul>
        <!-- 摄像头 -->
        <img @click="cameraStatus = false" v-show="cameraStatus" class="camera animate__animated animate__bounceIn" src="@/assets/icon/home/reekoRight05/img03.png">
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
import bus from '@/utils/bus'
import countTo from 'vue-count-to'; /// 数字滚动
export default {
  components: { countTo },
  data () {
    return {
      inAndOut: '',
      status: true,
      navIndex: 0,
      navData: [{name:'B1停车场'},{name:'B2停车场'}],
      cameraStatus: false,
    }
  },
  mounted () {
    bus.$on('camera', (e) => {
        this.cameraStatus = true
    })
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
      this.navIndex = index
      if(index == 1){
        
        this.$toast('正在接入中...')
        setTimeout(()=>{
          this.navIndex = 0
        },1000)
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
// 资产
.assets{width: 546px;height: 708px;position: absolute;top: 195px;left: 133px;z-index: 1;cursor: pointer;}
// 摄像头
.camera{width: 404px;height: 318px;position: absolute;top: 150px;left: calc(50% - 202px);z-index: 1;cursor: pointer;}
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: 981px;
  .content{height: calc(100% - 32px); display: flex; flex-direction: column; justify-content: space-around;
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