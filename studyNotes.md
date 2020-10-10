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

7. 复习回顾自定义指令：
   在main.js文件里注册一个全局自定义指令v-document-click
   Vue.directive('document-click', {
   bind (el, binding) {
    document.addEventListener('click', binding.value, false)
      }
   })
   钩子函数：
      bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

      inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

      update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

      componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

      unbind：只调用一次，指令与元素解绑时调用。

   钩子函数参数：
      el：指令所绑定的元素，可以用来直接操作 DOM。
      binding：一个对象，包含以下 property：
      name：指令名，不包括 v- 前缀。
      value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
      oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
      expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
      arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
      modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
      vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
      oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
      
      **除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。**

8. 复习回顾vuex

   下载vuex后新建store.js文件
   引入```import Vue from 'vue'; import Vuex from 'vuex'```
   把共享的数据放在state对象中，在mutation对象中写修改state中的数据函数，在actions中调用mutation内的函数修改state中的数据或使用异步函数修改数据
   export default new Vuex.Store({})导出共享数据



