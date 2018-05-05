<template>
  <div class="tabbar">
    <router-link to="/home" tag="div" class="tab-item">
      <Item txt='首页' mark='home' @selItem='getVal' :sel='selected'>
          <img src="../../assets/image/homeActive.png"  alt="首页" slot="activeImg">
          <img src="../../assets/image/homeNormal.png" alt="首页" slot="normalImg">
      </Item>
    </router-link>
    <router-link to="/video" tag="div" class="tab-item">
       <Item txt='西瓜视频' mark='video' :sel='selected' @selItem='getVal'>
          <img src="../../assets/image/videoActive.png"  alt="西瓜视频" slot="activeImg">
          <img src="../../assets/image/videoNormal.png"  alt="西瓜视频" slot="normalImg">
      </Item>
    </router-link>
    <router-link to="/mine" tag="div" class="tab-item" >
       <Item txt='个人中心' mark='mine' :sel='selected' @selItem='getVal'>
          <img src="../../assets/image/mineActive.png"  alt="个人中心" slot="activeImg">
          <img src="../../assets/image/mineNormal.png"  alt="个人中心" slot="normalImg">
      </Item>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    import Item from 'components/item/item'

    export default{
         data() {
            return {
                selected:'home'
            }
        },
        methods:{
            getVal(val){
                this.selected = val
            }
        },
        components:{
            Item
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .tabbar
        position :fixed
        display :flex
        bottom :0px
        left :0px
        height :50px
        line-height :50px
        width:100%
        border-top:1 solid #ccc
        justify-content :center
        background-color :#EDEDED
        .tab-item   
            padding:0 30px
            img
                height :auto
                width:40%
</style>

