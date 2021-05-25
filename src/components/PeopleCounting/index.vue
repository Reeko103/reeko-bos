<template>
<div>
  <div class="reekoRight animate__animated animate__bounceInRight">
        <img class="img01" src="@/assets/icon/home/PeopleCounting/img01.png">
  </div>
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
// 右部分
.reekoRight{
    position: absolute;top: 80px;right: 12px;z-index: 1;width: 409px;height: calc(100% - 100px);
    .img01{width: 100%;height: 100%;}
}
</style>