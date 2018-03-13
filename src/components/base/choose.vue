<template>
  <div class="choose-wrapper">
      <ul class="lists">
         <li class="list" :class="{active: index===activedIndex}" v-for="(item,index) in datas" @click="actived(index)" :key="item.value">{{item.label}}</li>
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
          activedIndex: 0
      };
  },
  methods:{
      actived(index) {
          this.activedIndex = index;
      }
  }
}
</script>

<style lang="less" scoped>
.choose-wrapper{
    display: inline-block;
    .lists{
        font-size: 14px;
        .list{
            display: inline-block;
            padding: 6px 8px;
            margin-right: 5px;
            border-radius: 0.2em;
            border: 1px solid #e3e3e3;
            cursor: pointer;
        }
        .active{
            background: #4fc08d;
            color: #ffffff;
        }
    }
}

</style>
