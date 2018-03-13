<template>
  <div class="index-bottom">
      <ul class="index-bottom-list">
          <li class="index-bottom-list-item" v-for="item in boardList" :key="item.title">
              <section :class="item.id" class="item-content">
                  <h1 class="title">{{item.title}}</h1>
                  <p class="description">{{item.description}}</p>
                  <p class="buyBtn"><router-link to="/detail">立即购买</router-link></p>
              </section>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props:{
      boardList: Array
  }
}
</script>
<style lang="less" scoped>
.index-bottom{
    
    width: 900px;
    margin-top: 15px;
    
    .index-bottom-list{
        width: 100%;
        .index-bottom-list-item{
            display: inline-block;
            margin-bottom: 20px;
            width: 440px;
            height: 150px;
            box-sizing: border-box;
            padding: 25px;
            background: #ffffff;
            .car{
                background: url(../assets/images/2.png);
            }
            .earth{
                background: url(../assets/images/1.png);
            }
            .loud{
                background: url(../assets/images/3.png);
            }
            .hill{
                background: url(../assets/images/4.png);
            }
            .item-content{
                background-repeat: no-repeat;
                padding-left: 125px;
                .title{
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }
                .description{
                    margin-bottom: 20px;
                }
                .buyBtn{
                    display: inline-block;
                    padding: 10px 20px;
                    color: #ffffff;
                    background: #4fc08d;
                }
            }
        }
        .index-bottom-list-item:nth-child(even){
            margin-left: 20px;

        }
        
    }
}
</style>


