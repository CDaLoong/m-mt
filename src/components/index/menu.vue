<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
          <dt>全部分类</dt>
          <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
              <i :class="item.icon" />
              {{ item.title }}
              <span class="arrow" />
          </dd>
    
      </dl>
      <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
          <template v-for="(item, index) in curDetail.children">
              <h4 :key="index">{{ item.title }}</h4>
              <span v-for="(m, i) in item.children" :key="m + '_' + i" @mouseenter="menuEnter(curDetail)">{{ m }}</span>
          </template>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            curDetail: null,
            menuList: [{
                title: '美食',
                icon: 'food',
                children: [{
                    title: '美食',
                    children: ['代金券', '甜点饮品', '火锅自助餐',]
                }]
            },
            {
                title: '外卖',
                icon: 'takeout',
                children: [{
                    title: '外卖',
                    children: ['美团外卖']
                }]
            },
            {
                title: '酒店',
                icon: 'hotel',
                children: [{
                    title: '酒店',
                    children: ['代金券', '甜点饮品', '火锅自助餐',]
                }]
            },
            {
                title: '民宿',
                icon: 'homestay',
                children: [{
                    title: '民宿',
                    children: ['代金券', '甜点饮品', '火锅自助餐',]
                }]
            }]
        }
    },
    methods: {
        menuEnter(item){
            this.curDetail = item;
        },
        menuLeave(){
            this.timer = setTimeout(() => {
                this.curDetail = null;
            },200)
        },
        detailEnter(){
            clearTimeout(this.timer);
        },
        detailLeave(){
            this.curDetail = null;
        }

    }
}
</script>

<style>

</style>