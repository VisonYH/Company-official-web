<template>
  <div id="app" @dialog-close="dialogClose()">
    <div class="app-header">
        <div class="app-header-inner">
            <router-link to="/" class="logo">
                <img src="../assets/logo.png" alt="首页图标">
            </router-link>
            <div class="head-nav">
                <ul class="head-nav-list">
                    <li @click="showLogin()">登录</li>
                    <li @click="showRegister()">注册</li>
                    <li class="last">关于</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="app-content">
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
    </div>
    <div class="app-footer">
        © 2016 fishenal MIT
    </div>
    <v-dialog v-if="loginShow" @dialog-close="dialogClose()">
        <login-dialog></login-dialog>
    </v-dialog>
  </div>
</template>

<script>
import loginDialog from './dialog/loginDialog'
import vDialog from './base/dialog'
export default {
  name: 'layout',
  components: {
    vDialog,
    loginDialog
  },
  data() {
      return {
          loginShow: false,
          registerShow: false
      };
  },
  methods:{
      showLogin() {
          this.loginShow = true;
      },
      showRegister() {
          this.registerShow = true;
      },
      dialogClose() {
          console.log('clicked');
          this.loginShow = false;
          this.registerShow = false;
      }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
#app{
    position: relative;
}
.app-header{
    background: #363636;
    width: 100%;
    height: 90px;
    line-height: 90px;
    color: #b2b2b2;
}
.app-header-inner{
    /* display: table; */
    margin: 0 auto;
    width: 1200px;
    height: 90px;
}
.logo{
    float: left;
    display: table-cell;
    
    width: 90px;
    height: 90px;
}
.logo img{
    vertical-align: middle;
    width: 50px;
    height: 50px;
}
.head-nav{
    display: table-cell;
    float: right;
    height: 90px;
    font-size: 0;
}
.head-nav-list li{
    font-size: 14px;
    vertical-align: middle;
    display: inline-block;
    height: 14px;
    line-height: 100%;
    padding: 0 0.8em;
    border-right: 2px solid #b2b2b2;
    cursor: pointer;
}
.head-nav-list li:last-child{
    border: none;
}
.app-footer{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
}
</style>
