# 基于jqwidget和EMAP封装的Vue组件

演示页面：[https://wisedu.github.io/bh-vue-demo](https://wisedu.github.io/bh-vue-demo)

组件文档参考：[http://res.wisedu.com/FS/vue-doc/index.html](http://res.wisedu.com/FS/vue-doc/index.html)

### 引入组件库
1. 使用npm方式引入：
    ```
    npm install bh-vue
    ```
2. 使用压缩js的方式引入
    ```
    <script src="//res.wisedu.com/fe_components/bh-vue/bh-vue.min.js"></script>
    ```

### 打包组件库到min.js文件

```
npm install
npm run pack
```

### 包含第三依赖库的页面模板：
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>jqwidget-based Vue Components</title>
    <link rel="stylesheet" href="//res.wisedu.com/fe_components/jqwidget/blue/bh.min.css" />
    <link rel="stylesheet" href="//res.wisedu.com/fe_components/jqwidget/blue/bh-scenes.min.css" id="bhThemes" />
    <link rel="stylesheet" href="//res.wisedu.com/bower_components/fontawesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="//res.wisedu.com/fe_components/iconfont/iconfont.css">
    <link rel="stylesheet" href="//res.wisedu.com/bower_components/selectize/dist/css/selectize.bootstrap3.css">
    <link rel="stylesheet" href="//res.wisedu.com/fe_components/selectize/select.css">
    <link rel="stylesheet" href="//res.wisedu.com/bower_components/summernote-0.8.1/dist/summernote-bs3.min.css">
    <link rel="stylesheet" href="//res.wisedu.com/bower_components/summernote-0.8.1/dist/summernote.css">
  </head>
  <body>
    <div id="app"></div>
    <script src="//res.wisedu.com/bower_components/jquery/dist/jquery.min.js"></script>
    <!-- jqxwidget -->
    <script src='//res.wisedu.com/fe_components/jqwidget/jqxwidget.min.js'></script>
    <script src="//res.wisedu.com/fe_components/jqwidget/globalize.js"></script>
    <script src="//res.wisedu.com/fe_components/jqwidget/globalize.culture.zh-CN.js"></script>
    <!-- bh -->
    <script src="//res.wisedu.com/fe_components/bh.min.js"></script>
    <script src="//res.wisedu.com/fe_components/bh_utils.js"></script>
    <script src="//res.wisedu.com/bower_components/sortable/Sortable.min.js"></script>
    <script src="//res.wisedu.com/bower_components/selectize/dist/js/standalone/selectize.min.js"></script>
    <!-- 文件上传控件依赖库 -->
    <script src="//res.wisedu.com/bower_components/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
    <script src="//res.wisedu.com/bower_components/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
    <script src="//res.wisedu.com/bower_components/blueimp-file-upload/js/jquery.fileupload.js"></script>
    <!-- 日历控件依赖库 -->
    <script src='//cdn.bootcss.com/moment.js/2.13.0/moment.min.js'></script>
    <script src='//cdn.bootcss.com/moment.js/2.13.0/locale/zh-cn.js'></script>
    <script src='//cdn.bootcss.com/underscore.js/1.5.2/underscore-min.js'></script>
    <script src='//cdn.bootcss.com/clndr/1.4.4/clndr.min.js'></script>
    <!-- nicescroll -->
    <script src="//res.wisedu.com/bower_components/jquery.nicescroll/jquery.nicescroll.min.js"></script>
    <!-- EMAP 依赖库 -->
    <script src='//cdn.bootcss.com/hogan.js/3.0.2/hogan.min.js'></script>
    <script src='//res.wisedu.com/fe_components/emap.js'></script>
    <!-- mock.js 在开发环境无法模拟post请求数据时使用 -->
    <!-- <script src='//res.wisedu.com/fe_components/mock/mock.js'></script> -->
    <!-- 富文本编辑器 -->
    <script src="//res.wisedu.com/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="//res.wisedu.com/bower_components/summernote-0.8.1/dist/summernote.js"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### 示例页面

```html
<template>
    <article bh-layout-role="single-no-title">
        <section class="bh-mh-8 bh-mv-8">
            <header>
                <h2>富文本编辑器</h2>
            </header>
            <div class="bh-row bh-mt-16">
                <div class="bh-col-md-6 bh-mv-8 bh-mb-16">
                    <emap-editor v-ref:ee :options='options'></emap-editor>
                </div>
                <div class="clearfix"></div>
                <div class="bh-col-md-6 bh-mv-8">
                    <button class='bh-btn bh-btn-default' @click='getContent'>获取输入内容</button>
                    <button class='bh-btn bh-btn-default' @click='setValue'>设置内容</button>
                    <button class='bh-btn bh-btn-default' @click='clear'>清空内容</button>
                    <button class='bh-btn bh-btn-default' @click='disable'>禁用</button>
                    <button class='bh-btn bh-btn-default' @click='enable'>启用</button>
                    <button class='bh-btn bh-btn-default' @click='isEmpty'>是否为空</button>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
    /** 使用js方式引入组件库的话不需要在此处import */
    import {EmapEditor} from 'components'

    export default {
        data: function() {
            return {
                options: {
                    contextPath: 'http://localhost:3000/mock/emap/major-model.json'
                }
            }
        },
        methods: {
            getContent: function() {
                console.log(this.$refs.ee.getValue());
            },
            setValue: function() {
                this.$refs.ee.setValue('<p>Hello World, Hello Dog !</p>');
            },
            clear: function() {
                this.$refs.ee.clear();
            },
            disable: function() {
                this.$refs.ee.disable();
            },
            enable: function() {
                this.$refs.ee.enable();
            },
            isEmpty: function() {
                alert(this.$refs.ee.isEmpty());
            }
        },
        /** 使用js方式引入组件库的话不需要在此处注册 */
        components: {EmapEditor}
    }
</script>
```
### 与设计相关备注（由于设计规范等原因与其不一致地方的记录）：
1，bh-choose组件中，左侧待选区域没有labels选择功能（部分页面的设计有，此处需设计统一）。
