<template>
  <div class="head-content">
      <slot name="headPorprait"></slot>
      <img src="../../assets/image/logo.png" alt="" class="logo">
      <slot name="relVideo"></slot>
  </div>
</template>

<script>
    
    export default{
        props:{
            txt:{
                type:String,
                default:'历史趣事|军事联盟|LOL'
            }
        }
    }
</script>


<style lang="stylus">
    .head-content
        display :flex
        position: relative
        width:100%
        height:100%
        overflow: hidden
        justify-content :center
        align-items:center
        .message-img
            height:25px
            width:auto
            position: absolute
            top:14px
            left:20px
        .search-img
            height:25px
            width:auto
            position: absolute
            top:14px
            right:20px
        .logo
            height:20px
            width:auto
    
</style>

