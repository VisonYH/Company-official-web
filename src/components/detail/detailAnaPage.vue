<template>
  <div class="data-statis">
      <div class="statis-top">
          <section class="head">
              <h1 class="title">数据预测</h1>
              <p class="description">
                  未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。
              </p>
          </section>
          <section class="sell">
              <div class="type sell-item">
                  <span class="text">购买数量：</span>
                  <count></count>
              </div>
              <div class="area sell-item">
                  <span class="text">产品类型：</span>
                  <selection :datas="buyTypes"></selection>
              </div>
              <div class="timeValid sell-item">
                  <span class="text">有效时间：</span>
                  <choose :datas="periodList"></choose>
              </div>
              <div class="timeValid sell-item">
                  <span class="text">产品版本：</span>
                  <multiSelection :datas="versionList"></multiSelection>
              </div>
              <div class="total sell-item">
                  <span class="text">总价：</span>
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
                    <p class="description">
                        网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。
                    </p>
                </section>
                <section class="des-item">
                    <h1 class="title">用户行为指标</h1>
                    <div class="content-text">
                        <ul>
                            <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
                            <li>用户在网站的停留时间；</li>
                            <li>用户来源网站（也叫“引导网站”）；</li>
                            <li>用户所使用的搜索引擎及其关键词；</li>
                            <li>在不同时段的用户访问量情况等。</li>
                        </ul>
                    </div>
                </section>
                <section class="des-item">
                    <h1 class="title">用户行为指标</h1>
                    <div class="content-text">
                        <ul>
                            <li>用户上网设备类型</li>
                            <li>用户浏览器的名称和版本</li>
                            <li>访问者电脑分辨率显示模式</li>
                            <li>用户所使用的操作系统名称和版本</li>
                            <li>用户所在地理区域分布状况等</li>
                        </ul>
                    </div>
                </section>
            </div>
      </div>
  </div>
</template>

<script>
import Vue from 'Vue';
import count from '../base/count';
import selection from '../base/selection';
import choose from '../base/choose';
import multiSelection from '../base/multiSelection';
export default {
   components:{
       count,
       selection,
       multiSelection,
       choose
   },
   data () {
    return {
      buyNum: 0,
      buyType: {},
      versions: [],
      period: {},
      price: 0,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 20px;
}
.description{
    margin-top: 10px;
    padding: 10px 0;
    line-height: 1.5;
    
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
               margin-top: 0;
               position: relative;
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
        .des-item{
            .title{
                font-size: 18px;
                font-weight: 700;
                padding: 20px 0 10px;
            }
            .content-text{
                line-height: 1.5;
            }
        }
    }
}
</style>
