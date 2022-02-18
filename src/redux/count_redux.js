/*
* 该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
* reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象（action）*/

export default function countRedux(preState = 0,action) {
    console.log(preState)
    // 从action对象中获取type、data
    const {type,data} = action
    // 根据type决定如何加工数据
    switch (type) {
        case 'increment':
            return preState + data // 如果是加
        case 'decrement':
            return preState - data // 如果是减
        default:
            return preState
    }
}