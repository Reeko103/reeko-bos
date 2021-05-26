<template>
<div>
    <div class="img01 animate__animated animate__bounceIn">
        <img @click="open" src="@/assets/icon/home/ElevatorManagement/img01.png">
        <div @click="elevator = true" class="trigger"></div>
    </div>
    
    
    <div class="effect animate__animated animate__bounceIn" v-show="elevator" >
        <video class="vi" src="../../assets/video/video07.mp4" autoplay loop controls="controls"></video>
        <div class="tip" @click="elevator = false"></div>

        
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        elevator: false,
    }
  },
  mounted () {
  },
  methods: {
      open(){
          this.$toast('正在接入中...')
      }
  }
}
</script>

<style lang="scss" scoped>
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