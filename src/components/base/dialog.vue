<template>
  <div class="dialog-wrapper" >
      <div class="tagForClose" @click="closeDialog()"></div>
      <div class="wrapper">
            <div class="closeBtn" @click="closeDialog()">X</div>
            <slot>there is nothing</slot>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
      closeDialog() {
          this.$emit('dialog-close');
      }
  },
}
</script>

<style lang="less" scoped>
.dialog-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
    z-index: 5;
    .tagForClose{
        width:100%;
        height: 100%;
       
    }
    .wrapper{
        position: absolute;
        width: 50%;
        max-height: 50%;
        top: 200px;
        left: 25%;
        background: #ffffff;
        border: 1px solid #b2b2b2;
        border-radius: 5px;
        z-index: 10;
        .closeBtn{
            float: right;
            padding: 5px 10px;
            color: #ffffff;
            background: #4fc08d;
            cursor: pointer;
        }
    }
}    
</style>
