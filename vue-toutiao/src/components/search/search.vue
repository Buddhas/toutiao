<template>
    <transition name="search">
        <div class="search">
            <div class="head">
                <img src="../../assets/image/back1.png"  @click="back" height="28" width="28">
                    <input v-model="inputText" type="text" class="query" placeholder="搜你想搜的">
                    <span class="text">搜索</span>
            </div>
            <div class="search-history">
                <div class="text">
                    <span>历史记录</span>
                    <img src="" alt="">
                </div>
                <ul class="search-warpper">

                    <li class="search-list" v-for="(item,index) in searchHistoryList">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="search-result">
                <news-list :newsList="searchList" @selcted="saveKeyWork"></news-list>
            </div>
        </div>
    </transition>
    
</template>


<script>
    import {mapGetters,mapActions} from "vuex"
    import {throttle} from "common/js/util"
    import newsList from 'components/news-list/news-list'

    export default{
        data () {
            return {
                searchList:[],
                inputText:"",
                searchHistoryList:[]
            }
        },
        created () {
            
            this.searchHistoryList = this.searchHistory
        },
        methods:{
            ...mapActions([
                "getSearch",
                "saveHistory"
            ]),
            setSearch(keywork){
                let offset = 0
                
                this.getSearch({
                    keyWork:keywork,
                    offset:offset
                    }).then((data)=>{
                    this.searchList = data
                    console.log(data)
                })
                
            },
            back(){
                this.$router.back()
            },
            saveKeyWork(){
                this.saveHistory(this.inputText)
            }
        },
        
        computed: {
              ...mapGetters([
                  'searchHistory'
              ])
        },
        components:{
            newsList
        },
        watch: {
            inputText(newVal){
               /* throttle((newVal)=>{
                    console.log(newVal)
                    this.setSearch(newVal)
                    
                },200)()*/
                 this.setSearch(newVal)
            }
        }
    }
</script>

<style lang="stylus">
    .search
        width:100%
        .head
            height:48px
            width:100%
            display:flex
            justify-content:flex-start
            align-items:center
            background-color:red
            .query
                width:300px
                height:30px
                border-radius:20px
                margin-right:10px
                outline:none
                padding-left:12px
            .text
                font-size:20px
                color:#00ffff
    &.search-enter-active, &.search-leave-active
        transition: all 0.1s
    &.search-enter, &.search-leave-to
        height: 0
</style>