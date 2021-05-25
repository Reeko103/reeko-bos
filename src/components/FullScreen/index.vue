<template>
    <div>
        <img class="fullScreen" :src="src" @click="screenfull" alt="全屏">
    </div>
</template>
<script>
  import screenfull from 'screenfull'
  export default {
    name: "home",
    data() {
      return {
        isFullScreen: false,
        src: require('@/assets/icon/home/fullScreen.png')
      }
    },
    methods:{
        //  全屏事件
        screenfull() {
            let isFullscreen = !this.isFullscreen
            isFullscreen ? this.src = require('@/assets/icon/home/exitFullScreen.png') : this.src = require('@/assets/icon/home/fullScreen.png')
            screenfull.toggle();
            this.isFullscreen = isFullscreen
        },
        /**
         * 是否全屏并按键ESC键的方法
         */
        checkFull() {
            //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
            //火狐浏览器
            var isFull = document.mozFullScreen||
            document.fullScreen ||
            //谷歌浏览器及Webkit内核浏览器
            document.webkitIsFullScreen ||
            document.webkitRequestFullScreen ||
            document.mozRequestFullScreen ||
            document.msFullscreenEnabled
            if(isFull === undefined) {
                isFull = false
            }
                return isFull;
        }
   },
   created() {
       let that = this
        window.onresize = function(){
            if(!that.checkFull()){
                // 退出全屏后要执行的动作
                that.fullscreen = false;
                that.src = require('@/assets/icon/home/fullScreen.png')
            }
        }
    }
}
  
</script>
<style lang="scss" scoped>
    .fullScreen{width: 24px;height: 24px;cursor: pointer;margin-right: 20px;}
</style>