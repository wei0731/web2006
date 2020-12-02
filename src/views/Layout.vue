<template>
  <div class="container">
      <HandNav/>
     <div class="container-view">
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
import HandNav from '../components/HandNav.vue'
export default {
    name:'Layout',
    components:{
        HandNav
    }
}
</script>

<style scoped>
.container-view{
  width: 1600px;
  margin: 0 auto;
}
</style>