## react-router 总结

### `react-router` 与 ``react-router-dom`` `react-router-native` 关系

`react-router-dom`依赖`react-router`，所以我们使用`npm`安装依赖的时候，只需要安装相应环境下的库即可，不用再显式安装`react-router`。基于浏览器环境的开发，只需要安装`react-router-dom`；基于`react-native`环境的开发，只需要安装`react-router-native`。`npm`会自动解析`react-router-dom`包中`package.json`的依赖并安装。

### `react-router` 常用API
  - `BrowserRouter` 

    对`<Router/>`组件进行二次封装，使用`history`库中的`createBrowserHistory`;

  - `HashRouter ` 

    对`<Router/>`组件进行二次封装，使用`history`库中的`createHashHistory`;

  - `Router` 

    主要作用是将`router`相关信息存储到`Context`中

  - `Switch`

    主要作用获取`context router`相关信息，并与`children route `进行匹配比较并返回

  - `Route`
  
  - `Redirect` 
  - `StaticRouter`
  - `Link` 
  - `NavLink`
  - `MemoryRouter` 
  - `Prompt `
  - `generatePath` 
  - `matchPath ` 
  - `withRouter` 
 
 ### `react-router` 常见问题


 
