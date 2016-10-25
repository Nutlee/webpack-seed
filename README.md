# webpack-seed

fork 自 [Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed) v1.2.2

详细修改说明请看个人博客 
[关于前端工程化的思考及《webpack多页应用架构系列》mock开发环境改造](http://nutlee.github.io/2016/10/24/%E5%85%B3%E4%BA%8E%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E7%9A%84%E6%80%9D%E8%80%83%E5%8F%8A%E3%80%8Awebpack%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8%E6%9E%B6%E6%9E%84%E7%B3%BB%E5%88%97%E3%80%8Bmock%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%94%B9%E9%80%A0/)

## 修改

* 增加本地 3000 端口开启 server 做 mock 服务器，当前生产环境修改为在 mock 服务器下热更新

* 增加 mockjs ，接口模拟数据

* 使用 supervisor 服务器配置文件监控，如果改动服务器会重启

* 分离 url 配置

* 修复原作者 dll.js 未压缩的问题

尚存问题

* 由于使用的 `html-webpack-plugin` 拼接出来的 HTML，所以所有的 HTML 并没有监控，需要手动在浏览器刷新。

* `html-webpack-plugin` 动态加载 chunk 并打上了 hash，导致每次任意一个 chunk 有改动，所有的 chunk 文件都会打上相同的 hash，对严格控制版本的情况不太合适。

## 原项目介绍

本项目是一个利用 webpack 架构的 **web app** 脚手架，其特点如下：

- 更适合多页应用。

- 既可实现全后端分离，也可以生成后端渲染所需要的模板。

- 引入layout和component的概念，方便多页面间对布局、组件的重用，妈妈再也不用担心我是选SPA呢还是Iframe了，咱们都！不！需！要！

- 编译后的程序不依赖于外部的资源（包括css、font、图片等资源都做了迁移），可以整体放到CDN上。

- 已整合兼容IE8+的跨域方案。

- 整合Bootstrap3(利用webpack按需打包)及主题SB-Admin，但其实换掉也很简单，或者干脆不用CSS框架也行。

- 不含Js框架（jQuery不算框架，谢谢）。在我原本的项目中，是用avalon2作为Js框架的，但考虑到脚手架本身并不需要Js框架，同时我也希望这个项目保持精简，因此决定剔除掉avalon2的部分。

- 整合[iconfont][1]作为字体图标方案，需要什么图标就自己上iconfont那打包下载下来，替换掉`src/public-resource/iconfont`内的文件。

## 使用说明

1. 全局安装 webpack 和 webpack-dev-server，如果已经装过那可以跳过这一步

	```
	$ npm install --global webpack webpack-dev-server supervisor
	```

2. 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：

	```
	$ npm install --no-optional
	```

3. 编译程序，生成的所有代码在`build`目录内。

	```
	$ npm run build # 生成生产环境（打包）代码。用npm run watch或npm run dev可生成开发环境的代码
	```

4. 启动开发环境

	```
	$ npm run start
	```

5. 打开浏览器，在地址栏里输入`http://localhost:8080/index.html`，就能看到页面了。

## CLI命令(npm scripts)
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据 `webpack.product.config.js`，build 出一份生产环境的代码 |
| npm run dev     | 根据 `webpack.config.js`,build 出一份开发环境的代码（未压缩） |
| npm run watch   | 在`npm run dev`的基础上添加`-- watch`，实时监控源文件，不需要 mock 环境时建议开发时使用这项 |
| npm run start   | 开启 webpack-dev-server，同时增加本地 mock 环境，然后就可以在 http://localhost:8080/index.html 查看成品了 |
| npm run profile | 显示编译过程中每一项资源的耗时，用来调优的 |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |

## 目录结构说明
```
├─build # 编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）
├─node_modules # 利用npm管理的所有包及其依赖
├─vendor # 所有不能用npm管理的第三方库
├─.babelrc # babel的配置文件
├─.eslintrc # ESLint的配置文件
├─package.json # npm的配置文件
├─webpack-config # 存放分拆后的webpack配置文件
│   ├─base # 主要是存放一些变量
│   ├─inherit # 存放生产环境和开发环境相同的部分，以供继承
│   └─vendor # 存放webpack兼容第三方库所需的配置文件
├─app.js # mock 服务器主入口
├─webpack.dev.server.js # webpack-dev-server 服务器配置
├─webpack.product.config.js # 生产环境的webpack配置文件（无实质内容，仅为组织整理）
├─webpack.config.js # 开发环境的webpack配置文件（无实质内容，仅为组织整理）
├─routes # 存放模拟的接口
├─src # 当前项目的源码
    ├─index.html # 仅作为重定向使用
    ├─pages # 各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
    │  ├─alert # 业务模块
    │  │  └─index # 具体页面
    │  ├─index # 业务模块
    │  │  ├─index # 具体页面
    │  │  └─login # 具体页面
    │  │      └─templates # 如果一个页面的HTML比较复杂，可以分成多块再拼在一起
    │  └─user # 业务模块
    │      ├─edit-password # 具体页面
    │      └─modify-info # 具体页面
    └─public-resource # 各个页面使用到的公共资源
        ├─components # 组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
        │  ├─footer # 页尾
        │  ├─header # 页头
        │  ├─side-menu # 侧边栏
        │  └─top-nav # 顶部菜单
        ├─config # 各种配置文件
        ├─iconfont # iconfont的字体文件
        ├─imgs # 公用的图片资源
        ├─layout # UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路
        │  ├─layout # 具体的布局套路
        │  └─layout-without-nav # 具体的布局套路
        ├─less # less文件，用sass的也可以，又或者是纯css
        │  ├─base-dir
        │  ├─components-dir # 如果组件本身不需要js的，那么要加载组件的css比较困难，我建议可以直接用less来加载
        │  └─base.less # 组织所有的less文件
        ├─libs # 与业务逻辑无关的库都可以放到这里
        └─logic # 业务逻辑
```

## 更新日志

基于 v1.2.2 [Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed)


