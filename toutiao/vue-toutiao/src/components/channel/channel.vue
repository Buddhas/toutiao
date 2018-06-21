<template>
<transition name="channel">

                                                        
   <div class="channelWrapper">
       <div class="back" @click="back"><img src="../../assets/image/open.png" alt="" height="30" width="30"></div>
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
            <transition-group class="subscribe_group" name="list">
                    <div class="subscribe_item" 
                    v-for='(item,index) in subscribeList' 
                    :key="index" @click.stop="_deleteSubscribe(index)"
                    >
                        {{item.text}}
                    </div>
                </transition-group>
              
            </draggable>
        </div>
        <div class="subscribe_no">
            <div class="subscribe_no_head">
                <p>点击添加频道</p>
            </div>
            <draggable class="subscribe_no_list" :options="{group:'subscribe'}">
                <transition-group class="subscribe_group" name="list">
                <div class="subscribe_no_item" 
                v-for='(item,index) in subscribeNoList' 
                :key="index"
                @start="move"
                @end="move"
                @click.stop="_addSubscribe(index)">
                    {{item.text}}
                </div>
            </transition-group>
            </draggable>
        </div>
   </div>
</transition>
</template>

<script>
    import {mapGetters,mapMutations,mapActions} from 'vuex'
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
            
            ...mapMutations({
                setSubscribe:'SET_SUBSCRIBE',
                setSubscribeNo:'SET_SUBSCRIBE_NO'
            }),
            ...mapActions([
                'deleteSubscribe',
                'addSubscribe'
            ]),
            move(){
                this.isDrag = !this.isDrag
            },
            _deleteSubscribe(index){
                this.deleteSubscribe(index)
            },
            back(){
                this.$router.back()
            },
            _addSubscribe(index){
                
                this.addSubscribe(index)
            },
            onMove ({relatedContext, draggedContext}) {
                //console.log(relatedContext)
                const relatedElement = relatedContext.element
                const draggedElement = draggedContext.element
                //console.log(relatedContext.element)
                return (!relatedElement || !relatedElement.fixed) && !draggedElement.url
            }
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
                .subscribe_group
                    display: flex
                    flex-wrap:wrap
                    width:100%
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
                .subscribe_group
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

    .list-enter-active, .list-leave-active
        transition: all 1s
    .list-enter, .list-leave-to
        opacity: 0
        transform: translateY(30px)
    .channel-enter-active,.channel-leave-active
        transition:all, 1s
    .channel-leave-active
        transform:translate3d(0,100%,0)
    .channel-enter-active
        animation: channel-fadein 1s
    @keyframes channel-fadein
        0%
            transform: translateY(100%)
        100%
            transform: translateY(0)


        
                
            

        
</style>
