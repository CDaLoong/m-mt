<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">
              {{ item.sub_title }}
            </div>
            <div
              class="price-info"
              v-if="item.rentNum && item.price_info.current_price"
            >
              <span class="curren-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">{{
                item.price_info.current_price
              }}</span>
              </span>
              <span class="old-price"
                >门市价￥{{ item.price_info.old_price }}
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
               <span class="curren-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
               <span class="curren-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
              <span class="units">/{{ item.price_info.units }}</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://img.meituan.net/phoenix/6c7afd9173809e32f3bfa08b554ea70a227697.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: 399,
            old_price: 599,
            avg_price: null,
            units: null,
          },
          rentNum: 0,
          address: "崇文门",
        },
        {
          image:
            "https://img.meituan.net/phoenix/93161f642813518f3f67f2ca11c5c4d3274794.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 280,
            units: '人均',
          },
          rentNum: 10,
          address: "崇文门",
        },
        {
          image:
            "https://img.meituan.net/phoenix/4ed3633f8f3fca2481ee883f52ec5382222710.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: 399,
            old_price: 599,
            avg_price: null,
            units: null,
          },
          rentNum: 10,
          address: "崇文门",
        },
        {
          image:
            "https://img.meituan.net/iphoenix/ac0a6ff1382b2bbd17ea318749b3784377985.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: 399,
            old_price: 599,
            avg_price: null,
            units: null,
          },
          rentNum: 10,
          address: "崇文门",
        },
        {
          image:
            "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: 399,
            old_price: 599,
            avg_price: null,
            units: null,
          },
          rentNum: 10,
          address: "崇文门",
        },
        {
          image:
            "http://p0.meituan.net/iphoenix/1cea0321c80d0b025c612439d497623d364286.jpg@740w_416h_1e_1c",
          title: "近创业园生态园简约北欧公寓",
          sub_title: "整套1居室·可住2人 | 长虹公园",
          price_info: {
            current_price: 399,
            old_price: 599,
            avg_price: null,
            units: null,
          },
          rentNum: 10,
          address: "崇文门",
        },
      ],
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>