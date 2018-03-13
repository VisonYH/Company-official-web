<template>
  <div class="data-statis">
      <div class="statis-top">
          <section class="head">
              <h1 class="title">数据统计</h1>
              <p class="description">
                  历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。
              </p>
          </section>
          <section class="sell">
              <div class="type sell-item">
                  <span class="text">产品类型：</span>
                  <v-choose :datas="buyTypes"></v-choose>
              </div>
              <div class="area sell-item">
                  <span class="text">适用地区：</span>
                  <v-selection :datas="districts"></v-selection>
              </div>
              <div class="timeValid sell-item">
                  <span class="text">有限时间：</span>
                  <span class="time">半年</span>
              </div>
              <div class="total sell-item">
                  <span class="text">总价</span>
                  <span class="price">500元</span>
              </div>
              <div class="buyNow sell-item">
                  立即购买
              </div>
          </section>
      </div>
      <div class="statis-bottom">
          <div class="sales-board-des">
                <section class="head">
                    <h2 class="title">产品说明</h2>
                    <p class="description">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
                </section>
                <table class="sales-board-table">
                    <tbody>
                        <tr class="ui-table-row">
                            <td class="col-first">
                                <div class="intro-pic">
                                    <label>安全安保</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>办公文教</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>彩票</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>车辆物流</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>成人用品</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>出版传媒</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>电脑硬件</label>
                                </div>
                            </td>
                        </tr>
                        <tr class="ui-table-row">
                            <td class="col-first">
                                <div class="intro-pic">
                                    <label>电子电工</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>房地产建筑装修</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>分类平台</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>服装鞋帽</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>箱包饰品</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>化工原料制品</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>机械设备</label>
                                </div>
                            </td>
                        </tr>
                        <tr class="ui-table-row">
                            <td class="col-first">
                                <div class="intro-pic">
                                    <label>家庭日用品</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>家用电器</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>教育培训</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>节能环保</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>金融服务</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>礼品</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>旅游住宿</label>
                                </div>
                            </td>
                        </tr>
                        <tr class="ui-table-row">
                            <td class="col-first">
                                <div class="intro-pic">
                                    <label>美容化妆</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>母婴护理</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>农林牧渔</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>软件</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>商务服务</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>生活服务</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>食品保健品</label>
                                </div>
                            </td>
                        </tr>
                        <tr class="ui-table-row">
                            <td class="col-first">
                                <div class="intro-pic">
                                    <label>手机数码</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>通讯服务设备</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>网络服务</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>医疗服务</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>游戏</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>运动休闲娱乐</label>
                                </div>
                            </td>
                            <td>
                                <div class="intro-pic">
                                    <label>招商加盟</label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
            </table>
            </div>
      </div>
  </div>
</template>

<script>
import Vue from 'Vue';
import vChoose from '../base/choose';
import vSelection from '../base/selection';
export default {
   components:{
       vChoose,
       vSelection
   },
   data () {
    return {
      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      districts: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 20px;
}
.description{
    margin-top: 20px;
    padding: 10px 0;
    background: #f7fcff;
    line-height: 1.8;
}

.data-statis{
    .statis-top{
        background: #fff;
        .head{
            padding: 20px;
        }
        .sell{
            margin-top: 30px;
            padding-left: 20px;
            
            .sell-item{
                margin: 20px 0;
                font-size: 0;
                .text{
                     display: inline-block;
                     width: 100px;
                     font-size: 14px;
                }
                .price,.time,{
                    font-size: 14px;
                }

            }
            .buyNow{
               display: inline-block;
               position: relative;
               margin-top: 0;
               left: 100px;
               padding: 10px 20px;
               background: #4fc08d;
               font-size: 14px;
               color: #ffffff;
               border-radius: 0.2em;
            }
        }
    }
    .statis-bottom{
        margin-top: 20px;
        padding: 20px;
        background: #fff;
        .sales-board-table{
            margin-top: 20px;
            width: 100%;
            td{
                padding: 15px;
                border: 1px solid #f0f2f5;
            }
        }
    }
}
</style>
