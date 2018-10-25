# js-labraries
[![](https://img.shields.io/badge/language-javascript-green.svg)](https://github.com/AinolaLong/base-math)
[![](https://img.shields.io/badge/powered-base--math-green.svg)](https://github.com/AinolaLong/base-math)
[![](https://travis-ci.org/AinolaLong/base-math.svg?branch=master)](https://travis-ci.org/AinolaLong/base-math)
[![](https://img.shields.io/github/license/AinolaLong/base-math.svg)](https://github.com/AinolaLong/base-math/blob/master/LICENSE)
[![](https://img.shields.io/github/issues/AinolaLong/base-math.svg)](https://github.com/AinolaLong/base-math/issues)

简单的数学方法库，旨在方便计算

## 兼容性
支持如下环境：

| IE   | EG   | CH   | FF   | SF   | OP   | IOS  | 安卓  | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| no   | 12+  | 19+  | 16+   | 9+   | 15+  | 9+   | 4.1+ | 0.12+ |

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 如何使用
通过npm下载安装代码

```bash
$ npm install --save base-math
```

如果你是node环境

```js
var baseMath = require('base-math');

baseMath.plus([1,2,3]) // 6
baseMath.plus([undefined, null, 1]) // 1
```

如果你是webpack等环境

```js
import { plus } from 'base-math';

plus([1,2,3]) // 6
plus([undefined, null, 1]) // 1
```

如果你是requirejs环境

```js
requirejs(['node_modules/base-math/dist/base-math.js'], function (baseMath) {
    baseMath.plus([1,2,3]) // 6
    baseMath.plus([undefined, null, 1]) // 1
})
```

如果你是浏览器环境

```html
<script src="node_modules/base-math/dist/base-math.js"></script>

<script>
    baseMath.plus([1,2,3]) // 6
    baseMath.plus([undefined, null, 1]) // 1
</script>
```

## 文档
- [API](https://github.com/AinolaLong/base-math/blob/master/doc/api.md)

## 更新日志
- [CHANGELOG.md](https://github.com/AinolaLong/base-math/blob/master/CHANGELOG.md)

## 计划列表
- [TODO.md](https://github.com/AinolaLong/base-math/blob/master/TODO.md)

## 贡献者指南
首先安装依赖

```bash
$ npm install
```

打包代码

```bash
$ npm run build
```

运行单元测试，浏览器端需要手动测试，html位于`test/browser`

```bash
$ npm test
```

修改`package.json`中的版本号，修改`README.md`，修改`CHANGELOG.md`，然后发布新版

```bash
$ npm run release
```

版本号规范
```
主版本号：当你做了不兼容的 API 修改，
次版本号：当你做了向下兼容的功能性新增，
修订号：当你做了向下兼容的问题修正。
```

## License
[MIT](https://github.com/AinolaLong/base-math/blob/master/LICENSE)

## keywords
- math
- 数学