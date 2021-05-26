<template>
<div>
    <img @click="elevator = true" class="img01 animate__animated animate__bounceIn" src="@/assets/icon/home/ElevatorManagement/img01.png">
    
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

.img01{position: absolute;top: 140px;left: calc(50% - 924px);z-index: 1;width: 1848px;height: 638px;cursor: pointer;}
</style>