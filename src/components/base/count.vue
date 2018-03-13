<template>
  <div class="count-wrapper">
      <ul class="lists">
          <li class="item" @click="decrease()">-</li>
          <li class="item"><input type="text" class="input" :value="count"></li>
          <li class="item" @click="add()">+</li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
      return {
          count: 1
      };
  },
  methods: {
      add() {
          this.count++;
      },
      decrease() {
           if(this.count > 0) {
               this.count--;
           } else{
               this.count = 0;
           }
      }
  }
}
</script>

<style lang="less" scoped>
.count-wrapper{
    display: inline-block;
    font-size: 14px;
    .lists{
        font-size: 0;
        .item{
            font-size: 14px;
            display: inline-block;
            width: 25px;
            line-height: 24px;
            border: 1px solid #e3e3e3;
            border-right: none;
            text-align: center;
            .input{
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                text-indent: 0.4em;
            }
        }
        .item:last-child{
            border-right: 1px solid #e3e3e3;
        }
        
        .item:first-child:hover,.item:last-child:hover{
            background: #4fc08d;
            cursor: pointer;
        }
    }
}
</style>
