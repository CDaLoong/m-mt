<template>
  <div class="m-products-list">
      <ul>
          <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{ item.name }}</li>
      </ul>
      <el-row>
          <item v-for="(item, index) in productList" :key="index" :meta="item" />
      </el-row>
  </div>
</template>

<script>
import Item from "./item"
export default {
    data() {
        return {
            nav: [{
                key: 's-default',
                name: '智能排序',
                active: true
            },
            {
                key: 's-price',
                name: '价格最低',
                active: false
            },{
                key: 's-score',
                name: '人气最高',
                active: false
            },{
                key: 's-comment',
                name: '评价最高',
                active: false
            }],
            productList: [{
                image: "https://p0.meituan.net/bbia/c1b74df19fb2eaae7eb661f3ba4ad831977012.jpg@550w_312h_1e_1c",
                title: "书亦烧仙草（凤凰南华里购物中心店）",
                type: "food",
                score: "4.2",
                commentNum: 0,
                comment: [{
                    username: "XXXX",
                    evalaute: "好吃"
                }],
                tab: ["火锅", "沙河"],
                address: "凤凰县湘西州凤凰县沱江镇南华里商业街第4幢1层102号",
                avg_price: 64,
                deal_items: [{
                    title: "葡萄芋圆冻冻1杯",
                    price: 909,
                    counter_price: 1150,
                    saleNum: 0,
                    price_type: "元"
                }]
            }]
        }
    },
    components: {
        Item,
    }

}
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss"
</style>