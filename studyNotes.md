# 开发笔记

## 遇到的问题与学到的知识

1. scss配置引用，以前都是用less，发现scss大同小异，很快上手，但是配置loader文件的时候报了错，在CSDN社区查解到vue/cli3.0不用配置loader，把配置删除后发现配置lang="scss"时还是报错，再次查解原来是因为"sass-loader"版本过高，将"sass-loader"降至7.0.1版本后成功解除报错
   
   ```css
    <style lang="scss">
    @import '@/assets/css/public/layout.scss';
    </style>
   ```

2. element组件初次接触使用，学会引入element和基本布局与图标使用
   
   ```js
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    Vue.use(ElementUI);
   ```

   Layout 布局与Container 布局容器: 
   - 每行分为 24 栏，引入后修改类名进行布局与图标引用
     - 通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。
     ```html
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple"></div></     el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></     div></el-col>
        </el-row>

        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
     ```

3. 学会配置eslint插件自动修复问题:
   npm i eslint-plugin-vuefix
   package.json修改为：
   ```js
   "lint": "eslint --fix --ext .js,.vue src"
   ```
   .eslintrc.js文件中配置：
   ```js
      // required to lint *.vue files eslint-plugin-vuefix 
      plugins: [
         'vuefix'
      ],
   ```
   终端运行npm run lint修改代码样式
   终端运行npm run dev就不会报ESLint错误了

4. 复习回顾router配置路由：
   配置默认路由：redirect: '/index',
   配置子路由：children: [{
                 path: '/',
                 name: 'index',
                 component: Index,
               }]

5. 学会使用element组件配置轮播图（也太好用了吧），去官网挑选一个喜欢的轮播图组件，把HTML代码copy过来，自己写下样式，然后配置数据就好了
   ```html
   <el-carousel height="240px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" :alt="item.alt">
      </el-carousel-item>
    </el-carousel>
   ```

6. 复习回顾prop父传子数据组件:
   父组件数据```<container :nav="iStyle" />```对子组件传输
   iStyle为数据名
   nav为子组件props接收数据名```props: ["nav"]```
   之后在子组件就可以自由使用父组件iStyle中的数据了```v-for="(item, index) in nav.list"```

