import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import Search from './search/search.jsx'
import ToDoList from './todolist/todolist.jsx'
class User extends React.Component {
    render() {          
           return <div className="main-body" id="todo-content">
                    <div className="todo-body">
                        <Search/>
                        <ToDoList/>
                    </div>
               </div>
    }
}

module.exports = User;