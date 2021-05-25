<template>
<div class="main">
    <div class="left animate__animated animate__bounceInLeft">
        <img class="img03-1" src="@/assets/icon/home/reekoRight03/img03-1.png">
    </div>
  <div class="reekoRight animate__animated animate__bounceInRight">
    <div class="til">
      <img class="img04" src="@/assets/icon/home/reekoRight03/img04.png">
      <span>1楼东南侧</span>
    </div>
    <div class="video">
        <video v-if="listIndex == 0" class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
        <video v-else class="vi" src="../../assets/video/video03.mp4" autoplay loop controls="controls"></video>
    </div>
    <div class="list">
        <img @click="navClass(index)" :class="{ active : index == listIndex }" v-for="(list,index) in data" :key="index" class="vi" :src="list.img">
        <!-- <video class="vi" src="../../assets/video/video02.mp4" autoplay loop controls="controls"></video>
        <video class="vi" src="../../assets/video/video03.mp4" autoplay loop controls="controls"></video> -->
        <!-- <video class="vi" src="../../assets/video/video04.mp4" autoplay loop controls="controls"></video>
        <video class="vi" src="../../assets/video/video05.mp4" autoplay loop controls="controls"></video> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      status: true,
      listIndex: 0,
      data:[{img: require("@/assets/icon/home/reekoRight03/vi01.png")},{img: require("@/assets/icon/home/reekoRight03/vi02.png")}],
    }
  },
  mounted () {
  },
  methods: {
    navClass(index){
        this.listIndex = index
           
      }
  }
}
</script>

<style lang="scss" scoped>
// .main{position: absolute;top: 0;left: 0;z-index: 1;width: 100%;height: 100%;}
.left{
    position: absolute;top: 64px;left: 0;z-index: 1;
    width: 420px;
    height: calc(100% - 64px);
    .img03-1{width: 100%;height: 100%}
}
// 右部分
.reekoRight{
    position: absolute;top: 140px;right: 180px;z-index: 1;
    .til{
      display: flex;align-items: center;font-size: 20px; color: #ffffff; padding-bottom: 17px;
      .img04{width: 20px;height: 24px;margin-right: 12px;}
    }
  .video{
    width: 714px;height: 440px;background:url("../../assets/icon/home/reekoRight03/img03.png") no-repeat;background-size: 100% 100%;
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    .vi{width: 611px;height: 400px;object-fit:fill;}
  }
  .list{
      width: 714px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .vi{width: 170px;height:112px;margin-bottom: 11px;border: 1px solid #2EDADA;object-fit:fill;margin-right: 12px;opacity: .5;cursor: pointer;}
      .active{opacity: 1;}
  }
}
</style>