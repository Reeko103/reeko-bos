<template>
<div>
  <img class="img01 animate__animated animate__bounceInLeft" src="@/assets/icon/home/EventCenter/img01.png">
  <img class="img02 animate__animated animate__bounceInRight" src="@/assets/icon/home/EventCenter/img02.png">

  <div class="bottom animate__animated animate__bounceInUp" :class="inAndOut">
    <img class="img03" src="@/assets/icon/home/EventCenter/img03.png">
    <img v-if="status" @click="switchC(1)" class="switch" src="@/assets/icon/home/EventCenter/img03-2.png">
    <img v-else @click="switchC(2)" class="switch" src="@/assets/icon/home/EventCenter/img03-1.png">
  </div>

  <!-- 高空抛物事件 -->
  <div v-if="gkpw" class="dangerousEvents animate__animated animate__zoomIn">
    <p class="tips">高空抛物报警！！</p>
  </div>
  <!-- 查看 -->
  <div v-if="seeGkpw" @click="seeGkpw = false" class="seeDangerousEvents animate__animated animate__zoomIn">
    <video autoplay class="vi" src="../../assets/video/gkpw.mp4" loop controls="controls"></video>
  </div>
  <video hidden controls="controls" :src="wav" ref="audio"></video>
</div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  data () {
    return {
      inAndOut: '',
      status: false,
      
      // 高空抛物事件
      wav: require("@/assets/voice/13166.wav"),
      gkpw: false,
      seeGkpw: false,
      // 高空抛物事件
    }
  },
  mounted () {
  },
  methods: {
    transmitOne(){  
      this.gkpw = true
      this.seeGkpw = false
      this.$nextTick(()=>{
        this.$refs.audio.currentTime = 0; //从头开始播放
        this.$refs.audio.play(); //播放
        setTimeout(()=>{
          this.seeGkpw = true
          this.gkpw = false 
          bus.$emit('transmit', true)
          setTimeout(()=>{
            this.seeGkpw = false
          },15000)
        },3000)
      })
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
  }
}
</script>

<style lang="scss" scoped>
// 报警
.dangerousEvents{position: absolute;top: calc(50% - 105.5px);left: calc(50% - 156.5px);z-index: 1;width: 313px;height: 211px; background:url("../../assets/icon/home/callThePoliceBg.png") no-repeat;background-size: 100% 100%;
  .tips{padding: 123px 0 0 67px;font-size: 20px;color: #FFEF3E;}
}
.seeDangerousEvents{position: absolute;top: calc(50% - 200px);right: 430px;z-index: 1;width: 500px;height: 400px;
  .vi{width: 100%;height: 100%;object-fit:fill;}
}

.img01{position: absolute;top: 80px;left: 22px;z-index: 1;width: 409px;height: 981px;}
.img02{position: absolute;top: 80px;right: 22px;z-index: 1;width: 409px;height: 981px;}
.bottom{position: absolute;bottom: -213px;left: 446px;z-index: 1;width: 1034px;height: 213px;
  .img03{width: 100%;height: 100%;}
  // 开关
  .switch{
    position: absolute;bottom: 213px;left: calc(50% - 35.5px);z-index: 1;width: 71px;height: 26px;cursor: pointer;
  }
}
.enter{
  transition: bottom .5s;
  bottom: -213px;
}
.out{
  transition: bottom .5s;
  bottom: 20px;
}
</style>