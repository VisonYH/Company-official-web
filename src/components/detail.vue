<template>
  <div class="detail">
      <div class="detail-left">
          <img :src="imgSrc()" alt="" class="detail-img">
          <ul class="detail-nav">
                <router-link :to="{ path: product.path }" class="nav-item" tag="li" :class="{active: $route.path===activeMap[index]}"  v-for="(product,index) in products" :key="product.name">
                {{product.name}}
                </router-link>
          </ul>
      </div>
      <div class="detail-right">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        products: [
            {
                name: '数据统计',
                path: 'count',
                icon: require('../assets/images/1.png'),
                active: false
            },
            {
                name: '数据预测',
                path: 'forecast',
                active: false
            },
            {
                name: '流量分析',
                path: 'analysis',
                active: false
            },
            {
                name: '广告发布',
                path: 'publish',
                active: false
            }
        ],
        imgMap: {
            '/detail/count': require("../assets/images/1.png"),
            '/detail/forecast': require("../assets/images/2.png"),
            '/detail/analysis': require("../assets/images/3.png"),
            '/detail/publish': require("../assets/images/4.png")
        },
        activeMap:['/detail/count','/detail/forecast','/detail/analysis','/detail/publish']
      }
  },
  methods:{
      imgSrc(){
          console.log(this.$route.path);
          return this.imgMap[this.$route.path];
      }
     
  }
}
</script>

<style lang="less" scoped>
.detail{
    width: 1200px;
    margin: 20px auto 0;
   
    .detail-left{
        float: left;
        width:200px;
        background: #ffffff;
        .detail-img{
            display: block;
            width: 100px;
            height: 100px;
            margin: 20px auto;
        }
        .detail-nav{
            padding-bottom: 20px;
            .nav-item{
                height: 35px;
                line-height: 35px;
                padding-left: 15px;
                cursor: pointer;
            }
            .nav-item:hover{
                background: #4fc08d;
            }
            .active{
                background: #4fc08d;
            }
        }
    }
    .detail-right{
        float: left;
        margin: 0 0 30px 20px;
        width: 980px;
    }
}
</style>

