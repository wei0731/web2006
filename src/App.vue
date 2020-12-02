<template>
  <div id="app">
    <router-view v-if="isRouterAilve"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      isRouterAilve:true
    }
  },
  components: {
  },
  provide(){
    return{
      relod:this.relod
    }
  },
  methods:{
    relod(){
      this.isRouterAilve=false
      this.$nextTick(()=>{
        this.isRouterAilve=true
      })
    }
  }
}
</script>

<style>

</style>
