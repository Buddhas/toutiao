<template>
    <div class="content">
        <ul class="content-list">
            <router-link :to="/content/ + item.item_id" 
            class="content_item" 
            v-for="(item,index) in newsList" 
            :key="index" 
            tag="li"
            @click.native="selectItem"> 
                <div class="item_title" v-html="item.title">
                </div>
                <div class="item_img" v-if="item.has_image ? true : false ">
                    <img v-for="(img,index) in item.image_list" class="item_img_list" :src="img.url" style="width:30%" v-if="index < 3">
                </div>
                <div class="item_info">
                    <span class="item_media_name">{{item.media_name}}</span>
                    <span class="item_comment_count">评论{{item.comment_count}}</span>
                    <span class="item_datetime">{{item.datetime}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {getCommon} from 'common/js/jsonp'

    export default{
        props:{
            newsList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                selectArticle:{}
            }
        },
        methods: {
            ...mapMutations([
                "GET_ARTICLE"
            ]),
            selectItem(){
                this.$emit("selcted")//告诉外部我被点击了
                let selectedId = this.$route.params.id
                this.selectArticle = this.newsList.find((news)=>{
                    if(news.item_id == selectedId){
                        return news
                    }
                })
                if(this.selectArticle != undefined){//保存所选文章
                    this.GET_ARTICLE(this.selectArticle)
                }
                let article = {
                    group_id:this.selectArticle.group_id,
                    item_id:this.selectArticle.item_id,
                    count:this.selectArticle.comment_count
                }
                
            }
        },
    }
</script>

<style lang="stylus">
    .content
        width:95%
        height:100%
        position: relative
        margin:0 auto
        .content-list
            height:100%
            overflow: hidden
            .content_item
                position: relative
                border-size:border-box
                width:100%
                padding:10px 0
                border-bottom: 1px solid #ddd
                .item_title
                    padding-bottom:10px
                    font-family:Arial,Verdana,Sans-serif
                .item_img
                    padding-bottom:10px
                    .item_img_list
                        padding-right:5px
                .item_info
                    color:#c1bcc7
                

                    





</style>