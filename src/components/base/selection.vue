<template>
  <div class="selection-wrapper">
      <div class="content" @mouseover="toggle()" @mouseout="toggle()">{{datas[selectedIndex].label}}</div>
      <ul class="lists" v-if="showFlag" @mouseover="toggle()" @mouseout="toggle()">
         <li class="list"  v-for="(item,index) in datas" @click="selectItem(index)"  :key="item.value">{{item.label}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props:{
      datas: Array
  },
  data(){
      return {
          selectedIndex: 0,
          showFlag: false
      };
  },
  methods:{
      toggle() {
          this.showFlag = !this.showFlag;
      },
      selectItem(index){
          this.selectedIndex = index;
          this.toggle();
      }
  }
}
</script>

<style lang="less" scoped>
.selection-wrapper{
    display: inline-block;
    .content{
        font-size: 14px;
        padding: 6px 8px;
        border-radius: 0.2em;
        border: 1px solid #e3e3e3;
        cursor: pointer;
    }
    .content::after{
        display: inline-block;
        content: '';
        height: 0;
        width: 0;
        margin-left: 6px;
        vertical-align: middle;
        border-top: 5px solid #e3e3e3;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid transparent;
    }
    .lists{
            font-size: 14px;
            width: 58px;
            position: absolute;
            border: 1px solid #e3e3e3;
            border-top: none;
            background: #fff;
            z-index: 100;
        .list{
            padding: 6px 8px; 
            cursor: pointer;
        }
        .list:hover{
            background: #e3e3e3;
        }
    }
}

</style>
