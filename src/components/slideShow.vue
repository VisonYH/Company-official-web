<template>
  <div class="slide-wrapper" @mouseover="clearInt" @mouseout="updateIndex">
      <div class="slide-img">
          <a href="#">
                <transition name="new">
                    <img :src="slides[cur_Index].src" alt="" v-if="isShow">
                </transition>
                <transition name="old">
                    <img :src="slides[cur_Index].src" alt="" v-if="!isShow">
                </transition>
          </a>
      </div>
      <div class="slide-bottom">
          <h2 class="indexNum">XXX{{cur_Index+1}}</h2>
          <span></span>
          <ul class="num-list">
              <li class="num-item" @click="gotoIndex(preIndex())">&lt;</li>
              <li class="num-item" v-for="(item,index) in slides" :key="index" @click="gotoIndex(index)" :class="{active: index===cur_Index}">{{index+1}}</li>
              <li class="num-item" @click="gotoIndex(nextIndex())">&gt;</li>
          </ul>
      </div>
      
  </div>
</template>

<script>
export default{
    props: {
        invTime: Number,
        slides: Array
    },
    data() {
        return {
            cur_Index: 0,
            isShow: true
        };
    },
    created() {
        
    },
    mounted() {
        this.updateIndex(this.cur_Index);
    },
    methods: {
        updateIndex() {
            this.inte = setInterval(() =>{
                this.gotoIndex(this.slideIndex(this.cur_Index));
            }, this.invTime);
        },
        gotoIndex(index) {
            this.isShow = false;
            setTimeout(()=>{
                this.cur_Index = index;
                this.isShow = true;
            }, 10);
        },
        slideIndex(index) {
            if(index == this.slides.length - 1){
                index = 0;
            } else{
                index++;
            }
            return index;
        },
        nextIndex() {
            if(this.cur_Index == this.slides.length - 1) {
                this.index_next = 0;
            } else{
                this.index_next = this.cur_Index+1;
            }
            return this.index_next;
        },
        preIndex() {
            if(this.cur_Index == 0) {
                this.index_pre = this.slides.length - 1;
            } else{
                this.index_pre = this.cur_Index-1;
            }
            return this.index_pre;
        },
        clearInt() {
            clearInterval(this.inte);
        }
    },
    computed: {
        
    }
};
</script>

<style scoped>
    .slide-wrapper{
        position: relative;
        width: 900px;
        height: 500px;
        overflow: hidden;
    }
    .new-enter-active{
        transition: all 0.5s;
    }
    .new-enter{
        transform:translateX(900px);
    }
    .old-leave-to{
        transform:translateX(-900px);
    }
    .old-leave-active{
        transition: all 0.5s;
    }
    .slide-img img{
        position: absolute;
        
    }
    .slide-bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        background: #000;
        opacity: 0.5;
        color: #ffffff;
    }
    .indexNum{
        float: left;
        margin-left: 20px;
        height: 30px;
        line-height: 30px;
    }
    .num-list{
        float: right;
        height: 30px;
        margin-right: 20px;
        line-height: 30px;
    }
    .num-item{
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
    }
    .active{
        text-decoration: underline;
    }
</style>
