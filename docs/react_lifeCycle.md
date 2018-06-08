## react 生命周期

### 概论

  React 生命周期分为三种状态 初始化 、更新 、销毁

  ![流程示意图](./images/react_life_cycle.jpg)

#### 1.初始化

  - `defaultProps`

      设置组件默认的 `props`

  - `propTypes`

      设置组件的 `props` 类型检查

  - `constructor(props, context)`

      可访问 `props` ,初始化 `state`

  - `componentWillMount()`

      可访问 `props` 与 `state` ,只调用一次

  - `render()`

      创建虚拟dom

  - `componentDidMount()`

     设置`timers`,发送 `AJAX`，获取节点，初始化第三方组件，只调用一次

#### 2.更新

  - `componentWillReceiveProps(nextProps)`

    当一个组件收到新的 `props` 时被调用，初始化不调用,在这个函数里调用 `this.setState()` 不会触发任何额外的渲染.

  - `shouldComponentUpdate(nextProps, nextState)`

    当 `props` 或者 `state` 发生变化时调用，**默认情况下返回 `true`**, 如果返回 `false`, `componentWillUpdate` `componentDidUpdate` `render`  将不会被调用。

    **不会在最初的渲染或者 forceUpdate 时被调用**

    性能优化处，`pureComponent`组件的实现。

  - `componentWillUpdate(nextProps, nextProps)`

    在渲染前被立即调用.这个方法不会被初始渲染调用.

  - `componentDidUpdate(prevProps,prevState)`
  
      在组件的更新被刷新到DOM后立即被调用.这个方法不会被初始渲染调用.

      使用这个方法作为 当组件被更新后在DOM上操作 的时机.

#### 3.销毁

  - `componentWillUnmount()`

    在组件被从DOM卸载 前 被立即调用.

    执行一些清理操作,比如 `timers` , `componentDidMount` 创建的DOM元素,事件绑定.

### 渲染流程

  1. 首次渲染Initial Render

  2. 调用this.setState （并不是一次setState会触发一次render，React可能会合并操作，再一次性进行render）
  
  3. 父组件发生更新（一般就是props发生改变，但是就算props没有改变或者父子组件之间没有数据交换也会触发render）

  4. 调用this.forceUpdate

  ![渲染示意图](./images/react_update_cycle.png)

### 常见问题

  - 不能 `componentWillUpdate` `componentDidUpdate` 生命周期使用 `this.setState()`，会造成死循环


### 参考文档
  - [gitbook](https://chenyitian.gitbooks.io/react-docs/content/docs/ref-03-component-specs.html)
  - [react事件属性](https://www.cnblogs.com/mabylove/p/6873506.html) 