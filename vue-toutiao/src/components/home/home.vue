<template>
    <transition name="slide">
    <div class="home-wrapper">
      <Head></Head>
      <div class="empty-content"></div>
      <div class="top_menu">
          <top-menu></top-menu>
      </div>
      <div class="empty-menu" ></div>
      <scroll class="scroll-item" :pullDownRefresh="pullDownRefresh" @pulldown="loadMore" :over="over" @over="transformOver">
        <div class="content-wrapper">
          <keep-alive>
              <news-list :newsList="news"></news-list>
          </keep-alive>
        </div>
    </scroll>
    </div>
   </transition>
</template>

<script>
import axios from 'axios'
import scroll from 'base/scroll/scroll'
import topMenu from 'components/top-menu/top-menu'
import Head from 'components/head/head'
import newsList from 'components/news-list/news-list'

import {mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  data(){
      return{
        text:[],
        pullDownRefresh:true,
        over:false,
        messageFlag:true
      }
  },
  
  created(){
      this.load()
  },

  methods:{
    ...mapActions([
      'getNew'
    ]),
    ...mapMutations({
        setLoadingAgain:'LOADING_AGAIN'
    }),
    //第一次进入页面，或者刷新后需要获取新闻
    load(){
      let type = this.$route.params.type || '__all__'
      if(this.newList[type].length === 0){
        this.getNew({
        type:type
      })
      }
      
    },
    //下拉刷新
    loadMore(){
      let type = this.$route.params.type
      this.getNew({
        type:type
      }).then((res) =>{
        this.over = true
      })
    },
    transformOver(){
      this.over = false
    },
   
    
  },
  computed:{
      ...mapGetters([
        'subscribe',
        'newList',
        'loadingAgain'
      ]),
      news(){
        return this.newList[this.$route.params.type || '__all__']
      }
  },

  watch: {
    $route(to,from){
      if(to.path.includes('home') && from.path.includes('home')){
        const type = to.params.type 
        this.getNew({
          type:type
        })
      }
    }
    
  },
  

  components:{
    scroll,
    topMenu,
    newsList,
    Head
  }
}
</script>


<style lang="stylus">
  .home-wrapper
    width:100%
    height:100%
    .empty-content
      width:100%
      height:50px
    .top_menu
      position: fixed
      top:50px
      width:100%
      height:52px
      z-index: 100
    .empty-menu
      width:100%
      height:52px
    .scroll-item
      height:700px
      overflow: hidden
    .slide-enter-active, .slide-leave-active
      transition: all 0.3s

    .slide-enter, .slide-leave-to
      transform: translate3d(100%, 0, 0)  
      
        
     


    

</style>


