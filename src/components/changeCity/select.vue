<template>
  <div
    class="choose-wrap"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom" />
      <div :class="{ 'mt-content': true, 'active': showWrapperActive }">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col">
            <span
              v-for="(item, index) in list"
              :key="index"
              :class="{'mt-item': true, 'active': item == value}"
              @click="changeValue(item)"
              >{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // showWrapperActive: false,

    };
  },
  props: ["list", "title", "value", "showWrapperActive"],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      this.$emit("change_active", true);
      // console.log(this.showWrapperActive)
    },
    documentClick() {
      // this.showWrapperActive = false;
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>