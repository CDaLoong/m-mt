<template>
  <div class="categroy">
      <dl class="m-categroy">
          <dt>按拼音首字母选择：</dt>
          <dd v-for="(item, index) in list" :key="index">
            <a :href="'#city-' + item">{{ item }}</a>
          </dd>
      </dl>
      <dl v-for="(item, index) in cityGroup" :key="index" class="m-categroy-section" :id="'city-' + index">
        <dt>{{ index }}</dt>
        <dd>
        <span v-for="city in item" :key="city.id">{{ city.name }}</span> 
        </dd>
      </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: null,
    }
  },
  created(){
    let data = [{
        "id": 1,
        "name": "北京",
        "pinyin": "beijing",
        "acronym": "bj",
        "rank": "5",
        "firstChar": "b"
      }];
    let obj = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityGroup = obj;
  }

}
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";

</style>