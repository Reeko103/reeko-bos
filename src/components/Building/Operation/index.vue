<template>
  <div class="operation">
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

        <!-- 会议室 -->
        <div v-if="navIndex == 0" class="meeting animate__animated animate__bounceIn    ">
            <div class="one">
                <div class="content">
                    <div class="tle">会议室</div>
                    <div class="decorate"></div>
                    <ul class="situation">
                        <li class="littleOne">
                            <span class="little"></span>
                            <span>已空置</span>
                        </li>
                        <li class="littleTwo">
                            <span class="little"></span>
                            <span>已预约</span>
                        </li>
                        <li class="littleThree">
                            <span class="little"></span>
                            <span>使用中</span>
                        </li>
                    </ul>
                    <ul class="list">
                        <li 
                        @click="meetingClass(index,list.status)"
                        :class="[
                        { listOne : list.status == 1 },
                        { listTwo : list.status == 2 },
                        { listThree : list.status == 3 },
                        { active : index == meetingI }]" 
                        v-for="(list,index) in meetingList" :key="index"
                        >{{list.num}}</li>
                    </ul>
                </div>
            </div>

            <!-- 在会议中 -->
            <img v-if="meetingS == 3" @click="close" class="inTheMeeting animate__animated animate__zoomInDown" src="@/assets/icon/home/Operation/img02-1.png">
        </div>

        <!-- animate__rotateInUpLeft animate__rotateInDownLeft-->
      <!-- 资产 -->
      <img v-if="navIndex == 5" class="assets animate__animated animate__bounceIn" src="@/assets/icon/home/Operation/img06-1.png">


      
  </div>
</template>

<script>
import countTo from 'vue-count-to'; /// 数字滚动
export default {
  components: { countTo  },
  data () {
    return {
        layerNumD: ['B1','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'], //* 楼层数据
        layerNumI: 5,  //* 楼层索引
        layerNumV: 'F5', //* 当前楼层
        navIndex: -1,
        navData: [{class:'img01', name:'会议室',img:require('@/assets/icon/home/Operation/img01-1N.png')}
        ,{class:'img02',name:'车辆卡口',img:require('@/assets/icon/home/Operation/img01-2N.png')}
        ,{class:'img03',name:'摄像头',img:require('@/assets/icon/home/Operation/img01-3N.png')}
        ,{class:'img04',name:'烟感器',img:require('@/assets/icon/home/Operation/img01-4N.png')}
        ,{class:'img05',name:'消防栓',img:require('@/assets/icon/home/Operation/img01-5N.png')}
        ,{class:'img06',name:'资产',img:require('@/assets/icon/home/Operation/img01-6N.png')}],
        meetingList: [{status:1,num: 101},{status:2,num: 104},{status:2,num: 105},{status:3,num: 106}
        ,{status:3,num: 107},{status:3,num: 108},{status:2,num: 110},{status:2,num: 120}
        ,{status:2,num: 122},{status:1,num: 101},{status:1,num: 101},{status:1,num: 101}],
        meetingI: -1, //* 索引
        meetingS: -1, //* 状态
        
    }
  },
  mounted () {
      this.addNumClass() /// 楼号动画
  },
  methods: {
      close(){
        this.meetingS = -1
        this.meetingI = -1
      },
      meetingClass(index,status){
          if(status == 3){
              this.meetingI = index
          }else{
              this.meetingI = -1
          }
          this.meetingS = status
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
      navClass(index){
          switch(index){
            case 0:
                this.navData[index].img = require('@/assets/icon/home/Operation/img01-1Y.png')
                this.navData[5].img = require('@/assets/icon/home/Operation/img01-6N.png')
                this.navIndex = index
                break;
            case 5:
                this.navData[index].img = require('@/assets/icon/home/Operation/img01-6Y.png')
                this.navData[0].img = require('@/assets/icon/home/Operation/img01-1N.png')
                this.navIndex = index
                break;
            default:
                this.navIndex = -1;
                this.navData[0].img = require('@/assets/icon/home/Operation/img01-1N.png')
                this.navData[5].img = require('@/assets/icon/home/Operation/img01-6N.png')
        }
           
      }
  }
}
</script>

<style lang="scss" scoped>
    .operation{
        position: absolute;top: 64px;left: 46px;z-index: 1;
        // 楼层
        .layerNum{position: absolute;top: 13px;left: 560px;z-index: 1; display: flex;flex-direction: column;justify-content: center;align-items: center;
        color: #ffffff;
            .top{display: flex;align-items: center;justify-content: space-between;
                img{width: 40px;height: 40px;}
                .list{width: 410px;height: 38px;display: flex;align-items: center;justify-content: space-around;font-size: 14px;border: 1px solid #0B6386;border-radius: 4px;margin: 0 7px;cursor: pointer;
                    .active{color: #16E5EF;}
                }
            }
            .num{width: 365px;height: 41px;display: flex;align-items: center;justify-content: center;font-size: 28px;font-style:italic;margin-top: 7px;background:url("../../../assets/icon/home/Operation/numBg.png") no-repeat;background-size: 100% 100%;}
        }
        // 导航
        .nav{position: absolute;top: 100px;left: 0;z-index: 1;width: 64px;height: 412px; color: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: space-around; background:url("../../../assets/icon/home/Operation/img01Bg.png") no-repeat;background-size: 100% 100%; font-size: 10px;
            li{display: flex;flex-direction: column;align-items: center;justify-content: center;
            cursor: pointer;
                img{width: 20px;height: 20px;margin-bottom: 5px;}
                .img01{width: 23px;height: 21px;}
                .img02{width: 21px;height: 17px;}
                .img03{width: 24px;height: 22px;}
                .img05{width: 17px;height: 25px;}
            }
            .active{color: #16E5EF;}
        }
        // 会议室
        .meeting{position: absolute;top: 100px;left: 83px;z-index: 1;
            .one{width: 545px;height: 420px;color: #ffffff;background:url("../../../assets/icon/home/Operation/img02.png") no-repeat;background-size: 100% 100%;
                .content{padding: 20px 30px;
                    .tle{font-size: 12px;color: #D0E9EB;border-bottom: 1px solid rgba(51,98,131,0.43);padding-bottom: 11px;}
                    .decorate{width: 31px;height: 1px;background: #19D4ED;}
                    .situation{display: flex;align-items: center;
                    padding: 20px 0;
                        li{display: flex;align-items: center;padding-right: 25px;
                            .little{width: 4px;height: 4px;margin-right: 10px;}
                        }
                        .littleOne{
                            color: #19D4ED;
                            .little{background: #19D4ED;}
                        }
                        .littleTwo{
                            color: #116EDC;
                            .little{background: #116EDC;}
                        }
                        .littleThree{color: #FBAD31;
                            .little{background: #FBAD31;}
                        }
                    }
                    .list{
                        display: flex;flex-wrap: wrap;
                        li{width: 47px;height: 47px;border-radius: 2px;font-size: 18px;display: flex;align-items: center;justify-content: center;margin:0 5px 10px;}
                    }
                    .listOne{ border: 1px solid #19D4ED;color: #19D4ED; }
                    .listTwo{ border: 1px solid #116EDC;color: #116EDC; }
                    .listThree{ border: 1px solid #FCA51C;color: #FCA51C;cursor: pointer;}
                    .active{background: #FBAD31;color: #ffffff;}
                }
            }
            // 在会议中
            .inTheMeeting{width: 427px;height: 342px;position: absolute;top: 140px;left: 555px;z-index: 1;cursor: pointer;}
        }
        // 资产
        .assets{width: 546px;height: 708px;position: absolute;top: 100px;left: 83px;z-index: 1;}
    }
</style>