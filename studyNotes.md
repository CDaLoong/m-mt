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
