<template>
<div>
    <img class="img05 animate__animated animate__bounceInLeft" src="@/assets/icon/home/ElevatorManagement/img05.png">
    <ul class="reekoRight animate__animated animate__bounceInRight">
        <li>
            <img class="img01" src="@/assets/icon/home/ElevatorManagement/img01.png">
            <video class="video06" src="../../assets/video/video06.mp4" autoplay loop controls="controls"></video>
            <div class="bottom">
                <img class="lef" src="@/assets/icon/home/ElevatorManagement/img01-1.png">
                <img src="@/assets/icon/home/ElevatorManagement/img01-2.png">
            </div>
        </li>
        <li>
            <img class="img02" src="@/assets/icon/home/ElevatorManagement/img02.png">
        </li>
        <li>
            <img class="img03" src="@/assets/icon/home/ElevatorManagement/img03.png">
        </li>
        <li>
            <img class="img04" src="@/assets/icon/home/ElevatorManagement/img04.png">
        </li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.img05{position: absolute;top: 121px;left: 16px;z-index: 1;width: 525px;height: 488px;}
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;height: calc(100% - 100px);width: 1060px;
    height: 854px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    img{width: 525px;height: 392px;}
    .img01{height: 448px;}
    .img02{height: 436px;}
    li{
        position: relative;
        .video06{position: absolute;top: 65px;
            left: 20px;
            z-index: 1;
            width: 480px;
            height: 300px;object-fit:fill;}
        .bottom{
            position: absolute;
            bottom: 20px;
            left: 0;
            z-index: 1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{width: 149px;height: 50px;cursor: pointer;}
            .lef{margin-right: 24px;}
        }
    }
}
</style>