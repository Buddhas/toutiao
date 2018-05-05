<template>
    
    <div class="top_menu_bar">
        <div class="top_menu_more" @click="toChannel">
            <img src="../../assets/image/open.png" alt="" height="30" width="30">
        </div>
        <scroll class="top-content" ref="scroll">
            <div class="top_menu_wrapper" ref="topMenuWrapper">
                <ul class="top_menu_list" ref="topMenuList">
                    <router-link v-for="(item,index) in subscribe" 
                        :to="item.url + '/' + item.type" 
                        tag="li"
                        :key="item.type"
                        class="top_menu_item"
                        >
                        {{item.text}}
                    </router-link>
                </ul>
                
            </div>
        </scroll>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex'
    import scroll from 'components/scroll/scroll' 

    export default{
        data(){
            return{
                topMenuNav:[]
            }
        },
        mounted (){
            //this.topMenuNav = this.subscribe
            this.getMenuWidth()
            window.addEventListener('resize',()=>{
                console.log('resize')
                this.getMenuWidth()
            })
        },
        methods: {
           getMenuWidth(){//动态获取滚动条宽度
               let list = this.$refs.topMenuList.children
               let widthAll = 0
               for(let i = 0; i < list.length; i++){
                   widthAll = widthAll + ((list[i].clientWidth == 0) ? 59 : list[i].clientWidth)
               }
               this.$refs.topMenuWrapper.style.width = widthAll + 'px'
           },
           toChannel(){
               this.$router.push('/channel')
           }
        },
        computed:{
            ...mapGetters([
               'newList',
               'subscribe'
            ]),
            
        },
        watch: {
            subscribe(){
                setTimeout(() => {
                    this.getMenuWidth()
                }, 20);
            }
        },

        components: {
            scroll
        }
    }
</script>

<style lang="stylus">
    .top_menu_bar
        position: relative
        height: 52px
        width:100%
        background-color:#f0f0f3
        .top_menu_more
            position: absolute
            height:52px
            width:40px
            background-color:#f0f0f3
            text-align:center
            line-height:4
            right:0px
            z-index: 200
        .top-content
            width:100%
            position: relative
            .top_menu_wrapper
                position: relative
                display:flex
                .top_menu_list
                    display: flex
                    margin-left:10px
                    .top_menu_item
                        display: block
                        height:52px
                        flex-shrink: 0
                        line-height:52px
                        padding-right:15px
                        font-size:22px
                        font-family:Arial,Verdana,Sans-serif
                        font-weight:200
                        &.router-link-active
                            color:red   
                .toChannel
                    position:fixed
                    top:0
                    right:0
                    z-index:200
</style>