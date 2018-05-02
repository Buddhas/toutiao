<template>
    <transition name="collection">
        <div class="collection-warpper">
            <div class="head">
                <span>我的收藏</span>  
                <div class="back" @click="back"><img src="../../assets/image/back.png" height="40" width="40"></div>
            </div>
            <news-list :newsList="collectionList"></news-list>
        </div>
    </transition>
    
    
</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsList from 'components/news-list/news-list'

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
           
            console.log('123')
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
            NewsList
        },
    }
</script>

<style lang="stylus">
    .collection-warpper
        width:100%
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
    .collection-enter-active,.collection-leave-active
      transition: all 0.6s
    .collection-enter,.collection-leave-to
      transform: translate3d(100%, 0, 0)
      
    
    
    
</style>