<template>
    <transition name="search">
        <div class="search" :class="{no_result:inputText.length && searchList.length == 0}">
            <div class="head">
                <img src="../../assets/image/back1.png"  @click="back" height="28" width="28">
                    <input v-model="inputText" type="text" class="query" placeholder="搜你想搜的">
                    <span class="text">搜索</span>
            </div>
            <div class="search-history" v-show="history.length && inputText.length == 0">
                <div class="title">
                    <span class="text">历史记录</span>
                    <img src="../../assets/image/delete.png" alt="" height="23" width="23" class="clear" @click="showConfirm" >
                </div>
                <ul class="search-warpper">
                    <li class="search-list" v-for="(item,index) in history" @click="selectHistory(item)">
                        <span class="text">{{item}}</span>
                        <img src="../../assets/image/deleteOne.png" alt="" width="20" height="20" class="icon" @click.stop="deleteOne(item)">
                    </li>
                </ul>
            </div>
            <div class="search-result" v-show="inputText">
                <news-list :newsList="searchList" @selcted="saveKeyWork"></news-list>
                <div v-show="loading && searchList.length == 0" class="loading" style="text-align: center"><img src="../../assets/image/loading.gif" alt=""></div>
            </div>
            <confirm ref="confirm" text="是否清空所有搜索历史" @confirm="deleteAll"></confirm>
            <div class="no_result" v-show="inputText.length  && !loading && searchList.length == 0">
                <img src="../../assets/image/no-result.png" alt="">
                <p class="text">抱歉，暂无搜索结果</p>
            </div>
        </div>
    </transition>
</template>


<script>
    import {mapGetters,mapActions} from "vuex"
    import {throttle} from "common/js/util"
    import newsList from 'components/news-list/news-list'
    import confirm from 'components/confirm/confirm'

    export default{
        data () {
            return {
                searchList:[],
                inputText:"",
                searchHistoryList:[],
                loading:true
            }
        },
        created () {
            
            this.searchHistoryList = this.searchHistory
        },
        methods:{
            ...mapActions([
                "getSearch",
                "saveHistory",
                "deleteAllSearch",
                "deleteOneSearch"
            ]),
            setSearch(keywork){
                let offset = 0
                this.loading = true
                this.searchList = []
                this.getSearch({
                    keyWork:keywork,
                    offset:offset
                    }).then((data)=>{
                    if(data.length > 0){
                        this.filterNew(data)
                    }else{
                        this.loading = false
                    }
                })
                
            },
            filterNew(data){
                data.forEach((item,index) =>{
                    if(item.title){
                        this.searchList.push(data[index])
                    }
                })
            },
            back(){
                this.$router.back()
            },
            saveKeyWork(){
                this.saveHistory(this.inputText)
            },
            deleteAll(){
                console.log()
                this.deleteAllSearch()
            },
            deleteOne(query){
                console.log(query)
                this.deleteOneSearch(query)
            },
            showConfirm(){
                this.$refs.confirm.show()
            },
            selectHistory(item){
                this.inputText = item
            }
        },
        computed: {
              ...mapGetters([
                  'searchHistory',
              ]),
              history(){
                  return this.searchHistory
              }
        },
        components:{
            newsList,
            confirm
        },
        watch: {
            inputText(newVal){
               /* throttle((newVal)=>{
                    console.log(newVal)
                    this.setSearch(newVal)
                    
                },200)()*/
                setTimeout(() => {
                    this.setSearch(newVal)
                }, 200);
                 
            }
        }
    }
</script>

<style lang="stylus">
    .search
        width:100%
        height:100%
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
        .search-history
            margin:0 20px
            .title
                display:flex
                margin-top:15px
                .text
                    width:100%
                    flex:1
                    font-size:20px
                    font-weight:bold
                    margin-bottom:20px
            .search-warpper
                width:100%
                .search-list
                    display: flex
                    align-items:center
                    width:100%
                    height:40px
                    line-height:40px
                    .text
                        flex:1
                        font-size:16px
        .search_result
            .loading
                width:100%
                height:60px
                text-align: center
         .no_result  
            width:100%
            margin-top:70px
            text-align:center
            img 
                height:60px  
            .text
                font-size:20px 
                font-weight:bold
    &.search-enter-active, &.search-leave-active
        transition: all 0.1s
    &.search-enter, &.search-leave-to
        height: 0
</style>