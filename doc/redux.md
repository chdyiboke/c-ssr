# redux

```
React：负责组件的UI界面渲染；
Redux：数据处理中心；
React-Redux：连接组件和数据中心，也就是把React和Redux联系起来。

```


Redux三大原则
```
唯一数据源
状态只读
数据改变只能通过纯函数（reducer）完成

```

React-Redux提供两个方法：connect和Provider。

```
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

```
Provider实现store的全局访问，将store传给每个组件。