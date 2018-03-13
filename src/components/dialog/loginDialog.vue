<template>
  <div class="login-wrapper">
      <section class="username item">
            <label for="username">用户名：</label>
            <input type="text" id="username" placeholder="请输入用户名">
      </section>
      <section class="password item">
            <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
            <input type="text" id="password" placeholder="请输入密码">
      </section>
      <div class="login">登录</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.login-wrapper{
    .item{
        text-align: center;
        margin-top: 30px;
        font-size: 16px;
        label{
            display: inline-block;
            width: 100px;
        }
        input{
            width: 30%;
            height: 1.8em;
            text-indent: 1em;
        }
    }
    .username{
        clear: both;
        
    }
    .login{
        width: 100px;
        height: 35px;
        margin: 30px auto;
        line-height: 35px;
        font-size: 16px;
        background: #4fc08d;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
    }
}
</style>
