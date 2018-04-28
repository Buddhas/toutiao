<template>
    <div ref="scrollWrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props:{
      click:{
          type:Boolean,
          default:true
      },
      //实时监听滚动
      probeType:{
          type:Number,
          default:3
      },
      //默认允许横向滚动
      scrollX: {
        type: Boolean,
        default: true
      },
      scrollY: {
        type: Boolean,
        default: true
      },
      over:{
          type:Boolean,
          default:false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新,默认不派发
       */
       pullDownRefresh: {
        type: Boolean,
        default: false,
        threshold: 500,
      }
  },
  mounted(){
      setTimeout(()=>{
          this.initScroll()
      },20)
      
  },
  methods:{
      initScroll(){
          if(this.$refs.scrollWrapper){
            this.scroll = new BScroll(this.$refs.scrollWrapper,{
              probeType:this.probeType,
              click:this.click,
              scrollX:this.scrollX,
              scrollY:this.scrollY,
              pullDownRefresh:this.pullDownRefresh
            })

            //下拉刷新
            if(this.pullDownRefresh){
                this.scroll.on('pullingDown',()=>{
                    this.$emit('pulldown')
                })
            }
          }
      },
      //计算高度
      getClientHeight(){
        let itemHeight = this.$refs.scrollWrapper.clientHeight
        this.$refs.scrollWrapper.style.height = `${itemHeight}px`
    }
  },
  watch: {
      over(){
          if(this.over){
            this.scroll.finishPullDown()
            this.$emit('over')
          } 
      }
  }
}
</script>
