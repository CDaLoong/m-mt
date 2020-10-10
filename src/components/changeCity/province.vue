<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/changeCity/select";
export default {
  data() {
    return {
      provinceList: ["山东", "河南", "甘肃"],
      province: "省份",
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      searchWord: '',
      loading: false,
    };
  },
  components: {
    MSelect,
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;

      if (flag) {
        this.cityActive = false;
      }
      // console.log(this.provinceActive)
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value) {
      this.province = value;
      // this.provinceActive = false;
    },
    changeCity(value) {
      this.city = value;
      // this.cityActive = false;
    },
    remoteMethod(val) {
        // console.log(e)
        //请求后端接口
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>