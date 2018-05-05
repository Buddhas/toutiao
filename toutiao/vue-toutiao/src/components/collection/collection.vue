<template>
    <transition name="collection">
        <div class="collection-warpper">
            <div class="head">
                <span>我的收藏</span>  
                <div class="back" @click="back"><img src="../../assets/image/back.png" height="40" width="40"></div>
            </div>
            <div class="noCollection" v-if="!collectionList.length">
                <img src="../../assets/image/noCollection.png" alt="" height="48" width="48"></br>
                <span>暂无收藏</span>
            </div>
            <scroll class="scroll">
                <news-list :newsList="collectionList"></news-list>
            </scroll>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsList from 'components/news-list/news-list'
    import scroll from 'components/scroll/scroll'

    export default{
        data () {   
            return {
                //collectionList:[]
            }
        },
        created () {
            //this.collectionList = this.collection
            //console.log(this.collectionList)
        },
        beforeRouteUpdate(){
           
           
        },
        methods:{
            back(){
                this.$router.back()
            }
        },
        computed:{
            ...mapGetters([
                'collection'
            ]),
            collectionList(){
                let collectionList = []
                collectionList = this.collection
                return collectionList
            }
        },
        components: {
            NewsList,
            scroll
        },
    }
</script>

<style lang="stylus">
    .collection-warpper
        width:100%
        height:100%
        overflow: hidden
        background-color:#f0f0f3
        .head
            position: relative
            height:48px
            line-height:48px
            width:100%
            text-align:center
            font-size: 20px
            font-weight: bold
            border-bottom:1px solid #c0c0c0
            .back
                position: absolute
                left:0
                top:0
        .noCollection
            text-align:center
            margin-top:15px
            font-weight:bold
        .scroll
            height:100%
            overflow: hidden
    .collection-enter-active,.collection-leave-active
      transition: all 0.6s
    .collection-enter,.collection-leave-to
      transform: translate3d(100%, 0, 0)
      
    
    
    
</style>