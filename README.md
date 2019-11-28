# 使用 Next.js 的静态页面项目

> 拥抱变化, 在不会产生严重影响的前提下勇敢试错

## Devops

- React **Only Hooks**
- Typescript/TSX
- Normal CSS and Styled Component

### Editor

推荐使用 Vscode, 已添加配置文件帮助检查代码风格.

### 兼容性控制

默认也是**最低**支持 IE11 及以上版本, 可以调整`babel targets`至只兼容现代浏览器.

### 代码风格

格式化方面采用`prettier`默认配置. 细节请参考[Prettier Options](https://prettier.io/docs/en/options.html).配置了 Eslint, 检查所有 _.jsx?,.tsx?_ 文件.

注意: **请勿随意禁用某条规则**.

提高效率必装插件: Eslint, Prettier. 编码阶段发现错误, 格式化自动修复错误.

### Git Hooks

提交代码前会进行一次风格检查, 检查不通过则不允许提交.

## 项目结构

```shell
src
├── components # 公共组件
├── pages # 页面
├── parts # 页面结构组件
├── style.css # 通用样式
└── theme.ts # 通用主题
```

### 结构组件

方便多人协同开发一个大型页面, 页面应根据体量拆分为解耦的结构组件, `parts`目录以页面为单位划分.

## 开发

```shell
# Install
$ npm install

# Development
$ npm run dev

# Build
$ npm run build
```

项目有两种交付方式

### 服务端渲染(SSR)

```shell
$ npm run start
```

执行后监听`localhost:3000`, 直接访问即可.

### 预渲染

```shell
$ npm run export
```

执行后在根目录会出现一个`out/`目录, 直接发布至 CDN 即可.

### 结合

在`next.config.js`内配置要静态导出的页面路径

```js
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};
```

配合反向代理, 将静态页面代理至CDN, 将动态渲染的页面代理至SSR服务器.
