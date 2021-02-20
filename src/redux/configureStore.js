import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
// https://juejin.cn/post/6844903870246699022

export default function configureStore(preloadedState) {
  //通过createStore创建一个store，把reducer作为参数传入
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
