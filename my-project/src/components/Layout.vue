<template>
  <div >
    <el-container>
      <el-header>
        <img  src="../assets/logo.png"/>
        <ul class="header-operations">
          <li @click="logShow = true" v-if="!logStatus">登录</li>
          <li v-if="logStatus" v-text="userAccount"></li>
          <li class="nav-pie"></li>
          <li  v-if="logStatus" >退出</li>
          <li @click="regShow = true" v-if="!logStatus">注册</li>
          <li class="nav-pie"></li>
          <li @click="aboutShow = true">关于</li>
         </ul>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view></router-view>
         </keep-alive>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <my-dialog :isShow="logShow" :type="log" @on-close="closeLogDialog" >
      <router-view name="log"></router-view>
    </my-dialog>
    <my-dialog :isShow="regShow" :type="log" @on-close="closeRegDialog" >
      <router-view name="reg"></router-view>
    </my-dialog>
</div >
</template>
<script>
import Dialog from './base/Dialog'

export default {
  created () {
    // console.log(this.$store.state)
  },
  components: {
    myDialog: Dialog
  },
  computed: {
    userAccount () {
      return this.$store.state.userAccount
    },
    password () {
      return this.$store.state.password
    },
    logStatus () {
      return this.$store.state.logStatus
    }
  },
  data () {
    return {
      logShow: false,
      regShow: false,
      log: ''
    }
  },
  methods: {
    closeLogDialog () {
      this.logShow = false
    },
    closeRegDialog () {
      this.regShow = false
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
ul li {
  list-style-type: none;
}
.el-header,
.el-footer {
  background-color: #545C64;
  color: #333;
  line-height: 60px
}
.el-header>img{
  width:50px;
  height:50px;
  margin-top: 5px;
}
.header-operations {
  float: right;
  padding-right: 30px;
  height: 100%;
}
.header-operations li{
    color:#fff;
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    margin: 0 10px;
    cursor: pointer;
}
.nav-pie{
  width: 1px!important;
  height: 15px;
  padding: 0 !important;
  margin: 0 !important;
  background: #fff!important;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
