<template>
<div>
  <img class="img01 animate__animated animate__bounceInLeft" src="@/assets/icon/home/EventCenter/img01.png">
  <img class="img02 animate__animated animate__bounceInRight" src="@/assets/icon/home/EventCenter/img02.png">

  <div class="bottom animate__animated animate__bounceInUp" :class="inAndOut">
    <img class="img03" src="@/assets/icon/home/EventCenter/img03.png">
    <img v-if="status" @click="switchC(1)" class="switch" src="@/assets/icon/home/EventCenter/img03-2.png">
    <img v-else @click="switchC(2)" class="switch" src="@/assets/icon/home/EventCenter/img03-1.png">
  </div>

  
</div>
</template>

<script>
export default {
  data () {
    return {
      inAndOut: '',
      status: false,
    }
  },
  mounted () {
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
  }
}
</script>

<style lang="scss" scoped>
.img01{position: absolute;top: 80px;left: 22px;z-index: 1;width: 409px;height: calc(100% - 100px);}
.img02{position: absolute;top: 80px;right: 22px;z-index: 1;width: 409px;height: calc(100% - 100px);}
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