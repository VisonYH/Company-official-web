<template>
  <div class="index-left">
      <section class="top-section section">
          <h1 class="head-title">全部产品</h1>
          <div class="index-left-top" v-for="products in productList" :key="products.title">
                <h2 class="subtitle">{{products.title}}</h2>
                <ul class="catg-list" v-for="product in products.list" :key="product.name">
                    <li class="catg-item"><a :href="product.url">{{product.name}}</a></li>
                </ul>
                <div v-if="!products.last" class="hr"></div>
          </div>
      </section>
      <section class="bottom-section section">
          <h1 class="head-title">最新消息</h1>
          <ul class="news-list">
              <!-- <li class="news-item" v-for="item in newsList" :key="item">新闻条目数据暂缺</li> -->
          </ul>
      </section>
  </div>
</template>

<script>
 
export default {
  name: 'indexLeft',
  props: {
      productList: {
          type: Object
      }
  }
}
</script>

<style>
.index-left{
    width: 300px;
    
}

.head-title{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.catg-list{
    padding: 0 15px 5px;
}
.catg-item{
    padding: 5px;
}
.subtitle{
    font-weight: 700;
    margin-bottom: 10px;
    padding-left: 15px;
}
.hr{
    margin: 5px 0 20px;
    height: 1px;
    width:100%;
    background: #ccc;
    
}
.section{
    background: #ffffff;
    margin-right: 15px;
}
.bottom-section{
    margin-top: 15px;
    min-height: 460px;
}
</style>
