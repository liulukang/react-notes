## Redux 总结

### `redux` 三大要素 `action`、`reducer`、 `store`

### 1. Action 描述“发生了什么”
 1. `Action` 是把数据从应用传到 `store` 的有效载荷。它是 `store` 数据的唯一来源。一般来说你会通过 `store.dispatch()` 将 `action` 传到 `store`。

 2. `Action` 本质上是 `JavaScript` 普通对象。我们约定，`action` 内必须使用一个字符串类型的 `type` 字段来表示将要执行的动作。
 
 3. **action 和 action创建函数** 概念混淆

 ### 2. Reducer 更新 state 

 1. `Action` 处理，无副作用，**只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。**

 2. 不能直接修改 `state`。

 3. 在 `default` 情况下返回旧的 `state`。

 4. `reducer` 的拆分合并 `combineReducers`

 ### 3. Store 存储维护数据信息

 1. `Redux` 应用只有一个单一的  `store` 
 2. 提供 `getState()` 方法获取 `state`
 3. 提供 `dispatch(action)` 方法更新 `state`
 4. 通过 `subscribe(listener)` 注册监听器;
 5. 通过 `subscribe(listener)` 返回的函数注销监听器。


 ### 4. Middleware 
 1. 从右到左
 2. 中间件实现原理