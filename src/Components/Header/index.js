import React, {Component} from 'react';
import './index.css'

class Header extends Component {


    handleKeyUp = e =>{
        if (e.code === 'Enter'){
            console.log(e.target.value)
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default Header;