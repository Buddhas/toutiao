<template>
  <div class="tabWrapper">
      <HeadContent>
          <img src="../../assets/image/collectionPage.png" alt="邮箱" slot='headPorprait' class="message-img" @click="toCollection">
          <img src="../../assets/image/search.png" alt="查询" slot='relVideo' class="search-img" @click="toSearch">
      </HeadContent>
  </div>
</template>

<script>
    import HeadContent from 'components/head-content/head-content'

    export default{
        methods:{
            toSearch(){
                this.$router.push('/search')
            },
            toCollection(){
                this.$router.push('/collection')
            }
        },
        components:{
            HeadContent
        }
    }
</script>

<style lang="stylus">
    .tabWrapper
        background-color :#d43d3d
        height :50px
        width:100%
        line-height :50px
</style>

