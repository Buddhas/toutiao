<template>
    <div class="collection-warpper">
        <div class="head">
            <span>我的收藏</span>  
            <div class="back" @click="back"><img src="../../assets/image/back.png" height="40" width="40"></div>
        </div>
        <news-list :newsList="collectionList"></news-list>
    </div>
    
</template>

<script>
    import {mapGetters} from 'vuex'
    import NewsList from 'components/news-list/news-list'

    export default{
        data () {
            return {
                collectionList:[]
            }
        },
        created () {
            this.collectionList = this.collection
            console.log(this.collectionList)
        },
        methods:{
            back(){
                this.$router.back()
            }
        },
        computed:{
            ...mapGetters([
                'collection'
            ])
        },
        components: {
            NewsList
        }
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
</style>