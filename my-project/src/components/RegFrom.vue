<template>
    <div>
    <div class="login-form">
        <div class="g-form">
        <div class="g-form-line" >
            <span class="g-form-label">：</span>
            <div class="g-form-input">
            <input type="text" autocomplete="off" placeholder="请输入用户名">
            </div>
        </div>
        <div class="g-form-line">
            <div class="g-form-btn">
            <a class="button" >登录</a>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
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
</style>
