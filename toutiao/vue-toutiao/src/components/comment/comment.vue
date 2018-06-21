<template>
    <div class="comment">
        <div class="back" @click="back">
            <img src="../../assets/image/back.png" height="40" width="40">
        </div>
        <div class="noComment" v-if="!commentList.length">
            <img src="../../assets/image/nocomment.png" alt="" height="48" width="48">
            </br>
            <span>暂无评论</span>
        </div>
        <scroll class="scroll-item" :data="commentList">
            <div>
                <ul class="comment-list" v-if="commentList.length">
                    <li v-for="(item,index) in commentList" :key="item.id" class="item">
                        <div class="item-warpper">
                            <img :src="item.user.avatar_url" alt="头像" height="28" width="28">
                            <div class="content">
                                <span class="user-name">{{item.user.name}}</span>
                                <br>
                                <span class="user-text">{{item.text}}</span>
                                <span class="user-time">{{item.create_time | dateFrm}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCommon } from 'common/js/jsonp'
    import moment from 'moment'
    import scroll from 'components/scroll/scroll'

    export default {
        data() {
            return {
                commentList: []
            }
        },
        methods: {
            getComment() {
                let article = {
                    group_id: this.selectedArticle.group_id,
                    item_id: this.selectedArticle.item_id,
                    count: this.selectedArticle.comment_count,
                    offset: 0
                }
                getCommon(article).then((data) => {
                    this.commentList = data

                })
            },
            back() {
                this.$router.back()
            }
        },
        filters: {
            dateFrm(date) {
                let time = moment().startOf('hour').fromNow()
                time = time.split(' ')[0]
                return `${time}分钟前`
            }
        },
        created() {
            this.getComment()
        },
        activated() {
            this.getComment()
        },
        computed: {
            ...mapGetters([
                'selectedArticle'
            ]
            )
        },
        components: {
            scroll
        }
    }
</script>

<style lang="stylus">
    .comment
        width:100%
        height:100%
        overflow: hidden
        .back
            border-bottom:1px solid #c0c0c0
            height:40px
            margin-bottom:10px
        .noComment
            width:100%
            text-align:center
        .scroll-item
            height:100%
            overflow: hidden
            
        .comment-list
            width:95%
            padding-bottom:50px
            margin:0 auto
            .item
               margin-bottom:15px
               .item-warpper
                    
                    display: flex
                    img
                        border-radius:50%
                    .content
                        margin-top:7px
                        margin-left:5px
                        padding:0px
                        .user-name
                            margin-bottom:3px
                            display: block
                            color:#406599
                        .user-text
                            margin-bottom:13px
                            display: block
                        
                    
            
            

</style>