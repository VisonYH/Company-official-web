<template>
  <div class="data-statis">
      <div class="statis-top">
          <section class="head">
              <h1 class="title">广告发布</h1>
              <p class="description">
                  广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。
              </p>
          </section>
          <section class="sell">
              <div class="type sell-item">
                  <span class="text">购买数量：</span>
                  <count></count>
              </div>
              <div class="sell-item">
                  <span class="text">行业：</span>
                  <selection :datas="tradeList"></selection>
              </div>
              <div class="area sell-item">
                  <span class="text">产品版本：</span>
                  <multi-selection :datas="versionList"></multi-selection>
              </div>
              <div class="timeValid sell-item">
                  <span class="text">有限时间：</span>
                  <span class="time">一年</span>
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
                        广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。
                    </p>
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
import count from '../base/count';
import selection from '../base/selection';
import multiSelection from '../base/multiSelection';
export default {
   components:{
       count,
       multiSelection,
       selection
   },
   data () {
    return {
       tradeList: [
        {
          label: '出版业',
          value: 0
        },
        {
          label: '媒体',
          value: 1
        },
        {
          label: '金融',
          value: 2
        },
        {
          label: '互联网',
          value: 3
        },
        {
          label: '游戏',
          value: 4
        }
       ],
       versionList: [
        {
          label: '初级版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        },
        {
          label: '专家版',
          value: 3
        }
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
