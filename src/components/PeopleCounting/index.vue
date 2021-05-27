<template>
<div>
  <div class="effect" v-if="visitorsFlowrate">
    <div class="top">
      <div class="left">
          <img class="img03T" src="@/assets/icon/home/PeopleCounting/img03-1.png">
          <span>人群聚集</span>
      </div>
      <img @click="visitorsFlowrate = false" class="img03X" src="@/assets/icon/home/PeopleCounting/img03-2.png">
    </div>
    <video class="vi" src="../../assets/video/video07.mp4" autoplay loop controls="controls"></video>
  </div>

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
  <div class="reekoRight animate__animated animate__bounceInRight">
      <img class="img01" src="@/assets/icon/home/PeopleCounting/img01.png">
  </div>

  <img class="img06 animate__animated animate__bounceIn" src="@/assets/icon/home/PeopleCounting/img02.png">
  <!-- 高空抛物事件 -->
  <div v-if="rqjj" class="dangerousEvents animate__animated animate__zoomIn">
    <p class="tips">人群聚集报警！！</p>
  </div>
  <!-- 查看 -->
  <div v-if="seeRqjj" @click="seeRqjj = false" class="seeDangerousEvents animate__animated animate__zoomIn">
    <video autoplay class="vi" src="../../assets/video/video07.mp4" loop controls="controls"></video>
  </div>
  <video hidden controls="controls" :src="wav" ref="audio"></video>

</div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  data () {
    return {
      visitorsFlowrate: false,
      layerNumI: 1,  //* 楼层索引
      layerNumV: 'F1', //* 当前楼层
      layerNumD: ['B1','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'], //* 楼层数据
      // 人群聚集事件
      wav: require("@/assets/voice/13166.wav"),
      rqjj: false,
      seeRqjj: false,
      // 人群聚集事件
    }
  },
  mounted () {
    bus.$on('visitorsFlowrate', (e) => {
        this.visitorsFlowrate = true
    })
    
  },
  methods: {
    transmitRqjj(){
      this.rqjj = true
      this.seeRqjj = false
      this.$nextTick(()=>{
        this.$refs.audio.currentTime = 0; //从头开始播放
        this.$refs.audio.play(); //播放
        setTimeout(()=>{
          this.seeRqjj = true
          this.rqjj = false 
          bus.$emit('transmit', true)
          setTimeout(()=>{
            this.seeRqjj = false
          },60000)
        },3000)
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
.effect{width: 426px;position: absolute;top: 100px;left: 100px ;z-index: 1;
  .top{display: flex;align-items: center; justify-content: space-between; border-bottom: 2px solid #FFCB2C;
    padding-bottom: 12px;
    .left{color: #ffffff;display: flex;align-items: center;}
    .img03T{width: 27px;height: 23px;margin-right: 10px;}
    .img03X{width: 19px;height: 20px;cursor: pointer;}
  }
  .vi{width: 100%;height: 284px;object-fit:fill;}
}
.img06{width: 73px;height: 309px;position: absolute;top: 130px;right: 450px;z-index: 1;}
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
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: 981px;
    .img01{width: 100%;height: 100%;}
}
</style>