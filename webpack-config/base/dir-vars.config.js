var path = require('path');
var mE = {};

// 源文件目录
mE.staticRootDir = path.resolve(__dirname, '../../'); // 根目录

/**/mE.vendorDir = path.resolve(mE.staticRootDir, './vendor'); // 存放所有不能用npm管理的第三方库

/**/mE.coreDir = path.resolve(mE.staticRootDir, './core'); // 项目框架
/**//**/mE.dllDir = path.resolve(mE.coreDir, './dll'); // 存放由各种不常改变的js/css打包而来的dll
/**//**/mE.libsDir = path.resolve(mE.coreDir, './libs');  // 与业务逻辑无关的库都可以放到这里
/**//**/mE.coreConfigDir = path.resolve(mE.coreDir, './config'); // 存放项目框架的各种配置文件
/**//**/mE.componentsDir = path.resolve(mE.coreDir, './components'); // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
/**//**/mE.layoutDir = path.resolve(mE.coreDir, './layout'); // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

/**/mE.srcRootDir = path.resolve(mE.staticRootDir, './example-admin'); // 项目业务代码根目录
/**//**/mE.pagesDir = path.resolve(mE.srcRootDir, './pages'); // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
/**//**/mE.publicDir = path.resolve(mE.srcRootDir, './public-resource'); // 存放各个页面使用到的公共资源
/**//**//**/mE.logicDir = path.resolve(mE.publicDir, './logic'); // 存放公用的业务逻辑
/**//**//**/mE.configDir = path.resolve(mE.publicDir, './config'); // 存放项目的各种配置文件

// 生成文件目录
mE.buildDir = path.resolve(mE.staticRootDir, './build'); // 存放编译后生成的所有代码、资源（图片、字体等，虽然只是简单的从源目录迁移过来）

module.exports = mE;
