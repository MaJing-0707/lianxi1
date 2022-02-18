/*
* 该文件专门用于暴露一个store对象，整个应用只有一个store对象
*  */
// 引入createStore，专门用于创建Redux中最为核心的store对象
import {createStore} from 'redux'
// 引入为Count组件服务的redux
import countRedux from '../redux/count_redux'
// 暴露store
export default createStore(countRedux)