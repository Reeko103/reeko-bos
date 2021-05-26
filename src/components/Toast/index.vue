<template>
  <transition name="fade">
    <div v-show="visible">{{message}}</div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: ''
    }
  }
}
</script>

<style scoped>
div {
  padding: 20px 40px;
  color: #fff;
  background: rgba(0, 0, 0, .6);
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100000;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  font-size: 50px;
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>