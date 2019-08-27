import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import TODO from './todo/todo.jsx'
import Department from './department/department.jsx'
import User from './user/user.jsx'

class Section extends React.Component {
    render() {          
           return <div className = 'section' >
                    <TODO/>
                    <Department/>
                    <User/>
                 </div>
    }
}

module.exports = Section;