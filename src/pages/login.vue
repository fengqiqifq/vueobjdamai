<template>
<div>

    <!-- <h3>这是登陆界面</h3> -->

    <Header></Header>
    <div class="logo">
      <img src="../assets/img/logo.png"/>
    </div>
    <div class="inp">
      <input type="text" placeholder="请输入用户名" v-model="username" />

      <input type="password" placeholder="请输入密码" v-model="password" />
      <router-link tag="button" to="/User" >登录</router-link>

      <p>
        <router-link to="/reg">没有账号？马上注册</router-link>
      </p>
      <!-- <p v-on:click="ToRegister">没有账号？马上注册</p> -->
      <br />
      <!-- <router-link to="/">返回</router-link> -->
    </div>
    
    
    
  </div>
</template>

<script>
	export default {
		data(){return{
      username:'',
      password:''

    }},
		components:{},
		methods(){},
		updated(){},
		methods:{}
		
	}
</script>

<style scoped>
.login-wrap {
  text-align: center;
}
h3 {
  text-align: center;
}
span {
  text-align: center;
}
.inp {
  margin: 0.3rem;
}
input {
  display: block;
  width: 4.5rem;
  height: 0.6rem;
  line-height: 0.4rem;
  margin: 0 auto;
  margin-bottom: 0.2rem;
  outline: none;
  border: 0.01rem solid #888;
  padding: 0.1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}


p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 4.5rem;
  height: 0.6rem;
  line-height: 0.4rem;
  margin: 0 auto;
  border: none;
  background-color:#cccc;
  color: #fff;
  font-size: 0.16rem;
  margin-bottom: 0.05rem;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
.logo{text-align: center;margin-top:.3rem}
</style>