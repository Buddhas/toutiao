<template>
    <div class="home-wrapper" ref="homeWrapper">
      <Head></Head>
      <div class="top_menu">
          <top-menu></top-menu>
      </div>
      <div class="loading" v-show="loading"><img src="../../assets/image/loading.gif" alt=""></div>
      <scroll class="scroll-item" :listenScroll="true" :data="news" :pullDownRefresh="pullDownRefresh" @pulldown="loadMore" :over="over" @over="transformOver">
        <div>
            <news-list :newsList="news" ></news-list>
        </div>
      </scroll>
    </div>
</template>

<script>
import axios from 'axios'
import scroll from 'components/scroll/scroll'
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
        messageFlag:true,
        loading:false
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
      
      let type = this.$route.params.type || '__all__'
      this.loading = true
      this.getNew({
        type:type
      }).then((res) =>{
        this.over = true
        this.loading = false
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
  activated(){
      console.log('1')
      //this.$refs.homeWrapper.click//主动触发事件，解决从收藏页面和搜索页面回来时图片显示不正确的现象
  },
  watch: {
    $route(to,from){
      if(to.path.includes('home') && from.path.includes('home')){
        const type = to.params.type 
        this.getNew({
          type:type
        })
      }
      this.loading = false
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
    height:100%
    overflow: hidden
    .scroll-item
      height:100%
      overflow: hidden
    .loading
      text-align:center     
</style>


