import './App.css';
import React, {Component} from 'react';
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";

class App2 extends Component {
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打豆豆',done:false},
        ]
    }

    componentDidMount() {
        const obj = {
            a:1,
            b:2
        }
        // Object.keys(obj) 键名
        const cloneobj = {}
        for (const key of Object.keys(obj)) {
            cloneobj[key] = obj[key]
        }
        console.log(cloneobj)
        // Object.entries(obj) 键值对的数组
        const cloneobj2 = {}
        for (const [key,value] of Object.entries(obj)) {
            console.log(key,value)
            cloneobj2[key] = value
        }
        console.log(cloneobj2)
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App2;
