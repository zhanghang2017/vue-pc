<template>
  <div>
      <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" autocomplete="off" v-model="userAccount"
          placeholder="请输入用户名">
        </div>
        <span class="g-form-error" v-if="errorAccoutText" v-text="errorAccoutText" ></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" autocomplete="off" v-model="password"
          placeholder="请输入密码">
        </div>
        <span class="g-form-error" v-if="errorPassWordText" v-text="errorPassWordText"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn" >
          <a :class="{'disAbled':!enClick}" @click="login" class="button">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>
  </div>
</template>
<script>
import API from '../api/api'
export default {
  data () {
    return {
      userAccount: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.enClick) {
        API.getLogin(this, {userAccount: this.userAccount, password: this.password}).then((reponse) => {
          console.log(reponse.body)
        }, (_error) => {
          console.log(_error)
        })
      }
    }
  },
  computed: {
    errorAccoutText () {
      if (this.userAccount.trim() === '') {
        return '请输入用户名'
      } else if (!/[A-Za-z]/.test(this.userAccount)) {
        return '必须包含字母'
      }
    },
    errorPassWordText () {
      if (this.password.trim() === '') {
        return '请输入密码'
      }
      return ''
    },
    enClick () {
      if (!this.errorAccoutText && !this.errorPassWordText) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
.disAbled{
    background: #666666
}
</style>
