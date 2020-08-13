CKEditor 5 For Tower
===================================

[![npm version](https://badge.fury.io/js/ckeditor5.svg)](https://www.npmjs.com/package/ckeditor5)

# 说明

这是 Tower 从 CKEditor5 官方 Fork 下来的一份代码，初衷是同时达到以下目的：
1. 满足那些无法通过外部插件、只能通过深度修改源码来完成的需求；
2. 可以灵活地被 Tower 主项目按需引用，替换官方版本；
3. 可以方便地根据官方主版本升级而更新。

# 准备工作

全局安装 [gitpkg](https://github.com/ramasilveyra/gitpkg)
```
$ yarn global add gitpkg
```

# 修改源码并发布

1. 在相应的 package 中进行修改，如 `packages/ckeditor5-widget/`

2. 进入相应的 package 目录
```
$ cd packages/ckeditor5-widget
```

3. 手动更新版本号（Minor 或 Patch），如 21.1.1
```
$ vi package.json
```

4. 在相应的 package 目录下，发布 tag
```
$ gitpkg publish

// 以下是正确发布的结果
gitpkg publish v1.0.0-beta.2
✔ success Package uploaded to git@github.com:mycolorway/ckeditor5.git with the name ckeditor5-widget-21.1.1.
+ @ckeditor/ckeditor5-typing@21.0.0
```

如此，gitpkg 会将当前 package 的代码打包成整个项目的一个 tag，以在 Tower 主项目中进行覆盖式引用。

# 在 Tower 中引用

要在 Tower 中引用修改后的包，只需要修改根目录中的`package.json`。

在 `resolutions` 节点中添加新的条目，以让项目中所有对当前 package 的依赖都修正成我们刚才发布的 tag。


```json
"resolutions": {
	...
	"@ckeditor/ckeditor5-widget": "mycolorway/ckeditor5#ckeditor5-widget-21.1.1",
}
```

然后运行 `yarn install`。
如此，我们在代码中如有对 `@ckeditor/ckeditor5-widget`的引用，无论什么版本，都会自动指向上面发布的 tag 版本。

# 更新上游代码

CKEditor5 官方更新源码都是一个 Major 版本更新一次，Minor 和 Patch 都是留给我们二次开发的。
所以我们只需要在官方每次更新 Major 后，合并一次上游代码。

上游代码设置在了 `git remote upstream`，我们以其 `stable` 分支为准。
需要更新时，只需：
```
$ git fetch upstream
$ git merge upstream/stable
```
