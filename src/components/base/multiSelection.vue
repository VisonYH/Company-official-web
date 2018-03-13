<template>
  <div class="selection-wrapper">
      <ul class="lists">
         <li class="list" :class="{active: item.actived}"  v-for="(item,index) in datas" @click="selectItem(index)"  :key="item.value">{{item.label}}</li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props:{
      datas: Array
  },
  data(){
      return {
      };
  },
  methods:{
      selectItem(index){
          if(!this.datas[index]['actived']){
              Vue.set(this.datas[index],'actived',false);
          }
          this.datas[index]['actived'] = !this.datas[index]['actived'];
      }
  }
}
</script>

<style lang="less" scoped>
.selection-wrapper{
    display: inline-block;
    .lists{
            display: inline-block;
            font-size: 0;
        .list{
            display: inline-block;
            border: 1px solid #e3e3e3;
            margin-right: 5px;
            padding: 6px 8px; 
            cursor: pointer;
            font-size: 14px; 
        }
        .active{
            background: #4fc08d;
            color: #ffffff;
        }
        .list:hover{
            background: #4fc08d;
        }
    }
}

</style>
