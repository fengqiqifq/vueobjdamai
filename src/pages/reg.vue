<template>
<div>
    <!-- <h3>这是注册界面</h3> -->
    <Header></Header>
    <div class="inpu">
      <input type="text" placeholder="请输入手机号" v-model="newUsernumber" />
      <input type="text" placeholder="请输入用户名" v-model="newUsername" />
      <input type="password" placeholder="请输入密码" v-model="newPassword" />

      <router-link to="/login"><button>注册</button></router-link>

      <!-- <p v-on:click="ToLogin">已有账号？马上登录</p> -->
      <p>
        <router-link to="/login">已有账号？马上登录</router-link>
      </p>
      <br />
      <!-- <router-link to="/">返回</router-link> -->
    </div>  
    
  </div>

</template>

<script>
	export default {
		data(){return{
			newUsernumber:'',
			newUsername:'',
			newPassword:''
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
.inpu {
  margin:.3rem;
}
input {
  display: block;
  width: 4.5rem;
  height: .6rem;
  line-height: .4rem;
  margin: 0 auto;
  margin-bottom: .1rem;
  outline: none;
  border: .01rem solid #888;
  padding: .1rem;
  box-sizing: border-box;
}

p {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 4.5rem;
  height: .6rem;
  line-height: .4rem;
  margin: 0 auto;
  border: none;
  background-color: #cccccc;
  color: #fff;
  font-size: .16rem;
  margin-bottom: .05rem;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}
</style>
