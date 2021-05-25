<template>
  <div class="mobile">
    <!-- 模型 -->
    <main-map @changeShowRight="changeShowRight"/>

    <div v-if="show" class="right animate__animated animate__bounceInRight">
      <div class="main">
        <div class="top">
          <h3 class="title">事件提醒</h3>
          <div class="decorate"></div>
        </div>
        
          <ul class="list">
            <li v-for="(list,index) in Data" :key="index"
            :class="{ active : index == Index }" 
            @click="callthePolice(index)"
            >
              <img :class="'img0'+index" :src="list.img">
              <div class="texts">
                <p>{{list.name}}</p>
                <span>报警通知</span>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { warning } from '@/api/mobile' 
import MainMap from '@/components/MainMap'    /// 主地图
export default {
  components: { MainMap },
  data () {
    return {
      show: false,
      Index: -1,
      Data: [{name:'高空抛物',img:require('@/assets/icon/home/Mobile/img01.png')},{name:'灭火器移走',img:require('@/assets/icon/home/Mobile/img02.png')},
      {name:'灯光未关',img:require('@/assets/icon/home/Mobile/img03.png')},{name:'资产移走',img:require('@/assets/icon/home/Mobile/img04.png')},
      {name:'电梯气压',img:require('@/assets/icon/home/Mobile/img05.png')},{name:'人群聚集',img:require('@/assets/icon/home/Mobile/img06.png')},
      {name:'危险人物',img:require('@/assets/icon/home/Mobile/img07.png')},]
    }
  },
  methods:{
    changeShowRight(){
        this.show = true
    },
    /// 报警
    callthePolice (index) {
      this.Index = index
      setTimeout(()=>{
        this.Index = -1
      },5000)
      
      warning(this.Data[index].name).then(res => {
          console.log(res,111)
          if(res.data.code == 1){
          }else{
              this.$toast('报警通知发送成功')
          }
      }).catch(error => {
          console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
// 右部分
.mobile{
  height: 100%;
  overflow-y: hidden;overflow-x: hidden;
  position: relative;
  background: #000000;
  .right{position: absolute;right: 0;top: 0;width: 423px;height: 100%;z-index: 1;background: #212A3D;
    .main{padding: 0 40px 0 55px;
      .top{font-size: 26px;color: #ffffff;padding: 47px 0 21px;border-bottom: 2px solid #3C4A66;position: relative;
        .decorate{width: 29px;height: 2px;background: #1F8EFA;position: absolute;left: 0;bottom: 0;z-index: 1;}
      }
      .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        li{width: 260px;height: 118px;color: #778392;background: #2F3B52;border-radius: 6px;margin-bottom: 10px;  display: flex; align-items: center; justify-content: center;
          .img00{width: 49px;height: 48px;margin-right: 21px;}
          .img01{width: 33px;height: 50px;margin:0 30px 0;}
          .img02{width: 33px;height: 46px;margin-right: 28px;}
          .img03{width: 44px;height: 38px;margin-right: 23px;}
          .img04{width: 42px;height: 38px;margin-right: 24px;}
          .img05{width: 39px;height: 39px;margin-right: 25px;}
          .img06{width: 39px;height: 39px;margin-right: 25px;}
          .texts{
            p{font-size: 22px;padding-bottom: 8px;}
            span{display: block;font-size: 18px;}
          }
        }
        .active{background: #1F8EFA;color: #ffffff;}
      }
    }
  }
    
}
</style>