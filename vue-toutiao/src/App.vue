<template>
  <div id="app" class="app">
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



