# vite-react

vite for react

### 命令

```javascript
pnpm i // 推荐
npm i
yarn

// 启动本地服务
npm run dev

// 测试环境
npm run build:test
// 测试环境
npm run build:prod
```

### 文件夹目录说明

```
|____tsconfig.node.json
|____index.html // html 模板
|____.env.prod // 生产环境变量，ps：一定要 VITE_ 开头
|____.env.test // 测试环境变量
|____README.md
|____public // 静态文件，直接输出
|____.gitignore
|____package.json
|____.env // 公共环境变量
|____.env.dev // 开发环境变量
|____.gitattributes
|____tsconfig.json // ts配置
|____vite.config.ts // vite配置
|____src // 开发目录
| |____main.tsx // 入口文件
| |____index.css // 公共样式
| |____layout // layout
| |____utils // 工具类
| |____assets // 资源文件夹
| | |____images
| |____components // 公共组件
| |____pages // 页面文件
| |____Routes // 路由组件
| | |____index.tsx
| |____store // redux
| | |____global.ts
| | |____index.ts
| | |____rootReducer.ts
```

### 规范

1.使用 cssmodule 需要带上 module 后缀，例：home.module.scss

2.className 命名使用驼峰或者 - 划线，例：homeCeter或home-center

3.缩进使用 2 空格或者 2 空格的 tab

4.使用 ts，尽量带上类型

5.组件和页面文件夹使用大写开头驼峰命名

6.图片使用下划线命名，用处_路径?（可以放到对应文件夹下）_名称，例：bg_home_btn

7.尽量使用hooks写法

### react-router v6

router 组件嵌套子路由时注意 Outlet 使用；

```javascript
<Router path="/main" element={ReactEle}>
  <Router path="/child" element={ReactEle}></Router>
</Router>
// 或者
{
  path: "/home",
  element: (
    <Suspense>
      <Home />
    </Suspense>
  ),
  children: [
    {
      path: "/home/children",
      element: (
        <Suspense>
          <HomeChildren />
        </Suspense>
      ),
    },
  ],
}

// Outlet显示子组件内容
<div className="home"><Outlet /></div> 

```

跳转 route，使用 v6 的 useNavigate

```javascript
const routerFn = useNavigate(); // to: 跳转路由, opt: {state: {}, replace: bool} ;

routerFn("second", { replace: true, state: { params: { a: 123 } } });
```
