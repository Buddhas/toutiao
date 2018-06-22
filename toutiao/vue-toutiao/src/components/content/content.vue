<template>
    <transition name="content1" mode="out-in">
    <div class="new-detail">
        <!-- <router-link to="/comment">123</router-link> -->
        <div class="back" @click="back"><img src="../../assets/image/back.png" height="40" width="40"></div>
        <div class="top-warpper">
            <div class="title">{{data.title}}</div>
            <div class="author">
                <div class="avatar_url"><img :src="data.avatar_url" alt="头像" style="width:28px;height:28px;border-radius: 50%"></div>
                <div class="author-info">
                    <span class="auto-name">{{data.detail_source}}</span>
                    <img src="https://s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag_bc28ef080879ea46945f90a280f66c28.svg" height="30" width="30">
                    <div class="time">{{data.publish_time | dateForm}}</div>
                </div>
            </div>
        </div>
        <div class="main-warpper">
            <div class="main-content" v-html="data.content"></div>
        </div>
       <div class="foot-warpper">
           <div class="comment-box">
               <input type="text">
               <span class="write-comment"><img src="../../assets/image/writeComment.png" alt=""><span class="write-comment-text">写评论...</span></span>
            </div>
            <!-- <router-link to="/comment" class="comment" tag="span">
                <img src="../../assets/image/comment.png" alt="">
            </router-link> -->
           <span class="collection" @click="addCollection"><img src="../../assets/image/collection.png" alt="" v-show="!isCollection"><img src="../../assets/image/collected.png" alt="" v-show="isCollection"></span>
       </div>
    </div>
</transition>
</template>

<script>
    import {getContent} from 'common/js/jsonp'
    import {mapGetters,mapMutations,mapActions} from 'vuex'
    import moment from 'moment'

    export default{
        data(){
            return{
                data:{},
                isCollection:false
            }
        },
        created(){
            this.isCollection = false
            this._getContent()
            this.hadCollection()
        },
        methods: {
            ...mapMutations({
                setCollection:'COLLECTION'
            }),
            ...mapActions([
                'saveCollections',
                'deleteCollections'
            ]),
            _getContent(){
                getContent(this.$route.params.id).then((data)=>{
                this.data = data
                },()=>{
                    this.loading = false
                    alert('失败')
                })
            },
            back(){
                this.$router.back()
            },
            addCollection(){
                if(!this.isCollection){
                    this.saveCollections(this.selectedArticle)
                    this.isCollection = true
                }else{
                    //console.log(this.selectedArticle)
                    let item = this.selectedArticle
                    this.deleteCollections(item)
                    this.isCollection = false
                }
               
            },
            hadCollection(){
                let id = this.$route.params.id
                let hadCollection = this.collection.findIndex((item) =>{
                    return item.item_id === id
                })
                
                if(hadCollection > -1){
                    this.isCollection = true
                }else{
                    this.isCollection = false
                }
            }
        },
        filters: {
            dateForm(date){
                return moment().format('L');
            }
        },
        activated(){
            this._getContent()
            this.hadCollection()
            window.scrollTo(0,0)
            
        },
        computed: {
            ...mapGetters([
                'selectedArticle',
                'collection'
            ])
        }
    }
</script>

<style lang="stylus">   
    .new-detail
        width:100%
        height:100%
        .back
            width:100%
            height: 40px
            border-bottom:1px solid #c0c0c0
            margin-bottom:15px
        .top-warpper
            width:95%
            margin:0 auto
            overflow: hidden
            .title
                font-size 20px
                font-weight:700
                margin-bottom:10px
            .author
                display: flex
                align-items: center
                margin:10px 0
                .avatar_url
                    height: 36px
                    width: 36px
                    img 
                        width:100%
                        height:100%
                        border-radius:50%
                .author-info
                    flex: 1
                    font-size: 12px
                    padding-left: 10px
                    color: #948d8d
                    .author-name
                        font-size: 14px
                        line-height: 16px
                    img
                        padding-left: 5px
                        height: 16px
                        margin-bottom: -3px
                    .time
                        line-height: 20px
        .main-warpper
            width:95%
            margin:0 auto
            overflow: hidden
            padding-bottom:45px
            p
                line-height:30px
                text-indent:20px
                font-weight: normal
                margin:10px 0
                font-size:20px
                strong
                    font-weight: bolder
                img
                    text-indent:0px
                    width:100%
                    margin:10px 0
                    display:block
        .foot-warpper
            position:fixed
            display:flex
            justify-content:flex-start
            align-items:center
            width:100%
            height:48px
            left:0
            bottom:0
            border-top:1px solid #c0c0c0
            z-index:400
            background: #fff                                                        
            .comment-box
                position: relative
                height:38px
                line-height:38px 
                width:40%
                margin-left:15px
                input
                    background-color:#aaaaaa45
                    width:100%
                    height:80%
                    border-radius:50px
                .write-comment
                    position: absolute
                    display: block
                    top:2px
                    left:20px
                    width:100%
                    height:30px
                    img
                        width:20%
                        height:100%
                    .write-comment-text
                        margin-bottom:2px
                        display: inline-block
                        height:100%
                        line-height:30px
                        font-size:12x
                        color:#c56666e3
            .comment
                width:13%
                display: inline-block
                height:36px
                line-height:48px
                text-align:center
                margin-left:15px
            .collection
                margin-left:15px
    .content1-leave-active,.content1-enter-active
        transition: all 1s
    .content1-enter, .content1-leave-active,.conten1-enter-active
        transform: translate3d(100%, 0, 0)
</style>

