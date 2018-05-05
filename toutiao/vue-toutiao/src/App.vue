<template>
  <div id="app" style="height:100%">
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tabber from 'components/tabbar/tabbar'


export default {
  name: 'App',
  components:{
    Tabber,
    
  }
}
</script>



