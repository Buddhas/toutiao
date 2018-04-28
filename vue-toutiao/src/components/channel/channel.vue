<template>
   <div class="channelWrapper">
        <div class="subscribed">
            <div class="subscribe_head">
                <p>点击移除频道</p>
            </div>
            <draggable class="subscribe_list" 
            v-model="subscribeList"
            @start="move"
            @end="move"
            :options="{group:'people'}"
            >
                <div class="subscribe_item" 
                v-for='(item,index) in subscribeList' 
                :key="index"
                >
                    {{item.name}}
                </div>
            </draggable>
        </div>
        <div class="subscribe_no">
            <div class="subscribe_no_head">
                <p>点击添加频道</p>
            </div>
            <draggable class="subscribe_no_list">
                <div class="subscribe_no_item" 
                v-for='(item,index) in subscribeNoList' 
                :key="index"
                @start="move()"
                @end="move()">
                    {{item.name}}
                </div>
            </draggable>
        </div>
   </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    import draggable from 'vuedraggable'


    export default{
        data(){
            return{
                subscribeList:[],
                subscribeNoList:[],
                isDrag:false
            }
        },
        methods: {
            move(){
                this.isDrag = !this.isDrag
            },
            ...mapMutations({
                setSubscribe:'SET_SUBSCRIBE',
                setSubscribeNo:'SET_SUBSCRIBE_NO'
            })
        },
        created () {
            this.subscribeList = this.subscribe
            this.subscribeNoList = this.subscribeNo
        },
        computed:{
            ...mapGetters([
                'subscribe',
                'subscribeNo'
            ]),
           
        },
        watch: {
            isDrag:function(newVal){
                
                if(newVal){
                    return
                }
                this.$nextTick(()=>{
                    let tmp_subscribe = this.subscribeList
                   
                    this.setSubscribe(tmp_subscribe)
                })
                
            }
        },
        components: {
            draggable
        }
    }
</script>


<style lang="stylus">
    .channelWrapper
        background-color:#fafafa
        width:100%
        height:100%
        overflow: hidden
        .subscribed
            background-color:#ffffff
            width:100%
            padding-left:8px
            padding-top:8px
            .subscribe_head
                width:100%
                font: size 15px
                color:red
            .subscribe_list
                display: flex
                flex-wrap:wrap
                width:100%
                margin-top:15px
                .subscribe_item
                    width:20%
                    height:25px
                    line-height:25px
                    text-align:center
                    margin-right:15px
                    margin-bottom:10px
                    border:1px solid #ccc
        .subscribe_no
            background-color:#ffffff
            width:100%
            height:auto
            padding-left:8px
            padding-top:8px
            .subscribe_no_head
                width:100%
                font: size 15px
                color:red
            .subscribe_no_list
                display: flex
                flex-wrap:wrap
                width:100%
                margin-top:15px
                .subscribe_no_item
                    width:20%
                    height:25px
                    line-height:25px
                    text-align:center
                    margin-right:15px
                    margin-bottom:10px
                    border:1px solid #ccc

        
                
            

        
</style>
