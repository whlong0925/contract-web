<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title"><span><span class="itatic" style="margin-right:10px">Rule</span>管理系统</span></h3>
      <el-form-item prop="userCode">
       
        <el-input name="userCode" type="text" v-model="loginForm.userCode" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <!--<div class='tips'>
        <span style="margin-right:20px;">userCode: admin</span>
        </span> password: admin</span>
      </div>-->
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        userCode: '',
        password: '',
        status:0
      },
      menuCount:'',
      loginRules: {
        userCode: [{ required: true, trigger: 'blur',message:'请输入用户名' }],
        password: [{ required: true, trigger: 'blur',message:"请输入密码"}],
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$request.post('/user/login.do',qs.stringify(this.loginForm), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).then(({data})=>{
  
        if(data.success){
          this.$router.push({ path: '/template' })
        }else{
          this.$message({
              message: "用户名或密码错误",
              type:'warning'
          });
        }
      })
    }
  },
  mounted(){
    
  }
}
</script>

