<template>
  <div class="tabWrapper">
      <HeadContent>
          <img src="../../assets/image/message.png" alt="邮箱" slot='headPorprait' class="message-img">
          <img src="../../assets/image/search.png" alt="查询" slot='relVideo' class="search-img" @click="toSearch">
      </HeadContent>
  </div>
</template>

<script>
    import HeadContent from 'base/head-content/head-content'

    export default{
        methods:{
            toSearch(){
                this.$router.push('/search')
            }
        },
        components:{
            HeadContent
        }
    }
</script>

<style lang="stylus">
    .tabWrapper
        position: fixed
        background-color :#d43d3d
        height :50px
        width:100%
        line-height :50px
        left: 0px
        top: 0px
        z-index:100
</style>

