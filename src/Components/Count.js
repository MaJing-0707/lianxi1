import React, {Component} from 'react';
import store from '../redux/store'

export default class Count extends Component {

    state = {
        count:0
    }

    componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    }

    // 加法
    increment = () => {
        const {value} = this.selectNumber
        store.dispatch({type:'increment',data:value * 1})
        // const {count} = this.state
        // this.setState({
        //     count: count + (value - 0)
        // })
    };

    // 减法
    decrement = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({
            count: count - (value - 0)
        })
    }

    // 奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        if (count % 2 !== 0){
            this.setState({
                count: count + (value - 0)
            })
        }
    }

    // 异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(() => {
            this.setState({
                count: count + (value - 0)
            })
        },500)
    }


    render() {
        const { count } = this.state
        return (
            <div style={{paddingLeft: 50}}>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={cl => this.selectNumber = cl}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}
