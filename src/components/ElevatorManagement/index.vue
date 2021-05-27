<template>
<div>
    <div class="img01 animate__animated animate__bounceIn">
        <img @click="open" src="@/assets/icon/home/ElevatorManagement/img01.png">
        <div @click="elevator = true" class="trigger"></div>
    </div>
    
    
    <div class="effect animate__animated animate__bounceIn" v-show="elevator" >
        <video class="vi" src="../../assets/video/video06.mp4" autoplay loop controls="controls"></video>
        <div class="tip" @click="elevator = false"></div>
    </div>

    <!-- 电梯气压事件 -->
    <div v-if="dtqy" class="dangerousEvents animate__animated animate__zoomIn">
        <p class="tips">电梯气压报警！！</p>
    </div>
    <!-- 查看 -->
    <div v-if="seeDtqy" @click="seeDtqy = false" class="seeDangerousEvents animate__animated animate__zoomIn">
        <video autoplay class="vi" src="../../assets/video/video06.mp4" loop controls="controls"></video>
    </div>
    <video hidden controls="controls" :src="wav" ref="audio"></video>
</div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  data () {
    return {
        elevator: false,
        // 电梯气压事件
        wav: require("@/assets/voice/13166.wav"),
        dtqy: false,
        seeDtqy: false,
        // 电梯气压事件
    }
  },
  mounted () {
  },
  methods: {
      transmitDtqy(){
        this.dtqy = true
        this.seeDtqy = false
        this.$nextTick(()=>{
            this.$refs.audio.currentTime = 0; //从头开始播放
            this.$refs.audio.play(); //播放
            setTimeout(()=>{
            this.seeDtqy = true
            this.dtqy = false 
            bus.$emit('transmit', true)
            setTimeout(()=>{
            this.seeDtqy = false
          },15000)
            },3000)
        })
        },
      open(){
          this.$toast('正在接入中...')
      }
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
.effect{
    padding: 82px 22px 25px;
position: absolute;top: 350px;right: 306px;z-index: 1;background:url("../../assets/icon/home/ElevatorManagement/img02Bg.png") no-repeat;color: #FFFFFF;background-size: 100% 100%;
    .tip{width: 50px;height: 60px;position: absolute;top: 0px;right: 0;z-index: 1;cursor: pointer;}
    .vi{width: 658px;height: 408px;object-fit:fill;}
    
}

.img01{position: absolute;top: 140px;left: calc(50% - 924px);z-index: 1;width: 1848px;height: 638px;cursor: pointer;
    img{width: 100%;height: 100%;}
    .trigger{width: 50px;height: 50px;position: absolute;top: 200px;left: 680px;z-index: 20;}
}

</style>