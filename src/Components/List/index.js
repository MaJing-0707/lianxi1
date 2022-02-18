import React, {Component} from 'react';
import './index.css'
import Item from "../Item";

class List extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(i=><Item key={i.id} {...i} />)
                }
            </ul>
        );
    }
}

export default List;