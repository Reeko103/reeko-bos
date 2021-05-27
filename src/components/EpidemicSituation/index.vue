<template>
<div>
  <img class="left animate__animated animate__bounceInLeft" src="@/assets/icon/home/EpidemicSituation/img01.png">
  <img class="right animate__animated animate__bounceInRight" src="@/assets/icon/home/EpidemicSituation/img02.png">
</div>
</template>

<script>
import countTo from 'vue-count-to'; /// 数字滚动
export default {
  components: { countTo  },
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
.left{position: absolute;top: 80px;left: 11px;z-index: 1;width: 409px;height: 981px;}
.right{position: absolute;top: 80px;right: 11px;z-index: 1;width: 409px;height: 981px;}
</style>
