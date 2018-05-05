<template>
  <div class="itemWrap" @click="selItem">
    <span v-show="bol"><slot name="activeImg"></slot></span>
    <span v-show="!bol"><slot name="normalImg"></slot></span>
    <span class="content">{{txt}}</span>
  </div>
</template>

<script type="text/ecmascript-6">


export default {
    props:{
        txt:{
            type:String,
            default:''
        },
        mark:{
            type:String,
            default:''
        },
        sel:{
            type:String,
            default:''
        }
        
    },
    
    methods:{
        selItem(){
            this.$emit('selItem',this.mark)
        }
    },
    computed:{
        bol:function(){
            if(this.mark == this.sel){
                return true
            }
            return false
        }
    }
    
}
</script>

<style lang="stylus">
    .itemWrap
        .content
            font-size 12px
        
</style>


