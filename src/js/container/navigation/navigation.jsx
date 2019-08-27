import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';

class Navigation extends React.Component {
    constructor(props){
        super(props);
        // this.changeTab = this.changeTab.bind(this);
    }
    render() {          
           return <div className = 'aside' >
                    <ul className="list-item">
                        <li><a data-tab="todo" href="#" onClick={this.changeTab.bind(this,"todo")}>TO DO</a></li>
                        <li><a data-tab="user" href="#" onClick={this.changeTab.bind(this, "user")}>USER</a></li>
                        <li><a data-tab="dept" href="#" onClick={this.changeTab.bind(this, "dept")}>DEPARTMENT</a></li>
                   </ul>
             </div>
    }
    changeTab(obj){
        var tab = obj;
        var allTab = document.querySelectorAll('.main-body');
        for (let i = 0; i < allTab.length; i++) {
            allTab[i].style.display = 'none';
        }
        document.getElementById(tab + '-content').style.display = 'block';
        console.log(this.props.toDoList);
    }
}

module.exports = Navigation;