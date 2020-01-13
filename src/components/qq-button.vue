<template>
  <div class="footbox">
    <input type="button" :value="text" class="login-btn" />
    <a href="javascript:;" class="tishi">忘记密码？</a>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  
 .footbox {
    width: 4.65rem;
    height: 0.65rem;
    margin: 0 auto;
  }
  
 .login-btn {
    width: 4.65rem;
    height: 0.65rem;
    background: #4c4f50;
    color: #fff;
    text-align: center;
    line-height: 0.65rem;
    border-radius: 8px;
    display: block;
    margin-top: 0.62rem;
    font-size: 0.28rem;
  }
  
 .tishi {
    width: 1.4rem;
    font-size: 0.25rem;
    margin-top: 0.28rem;
    display: block;
  }
</style>