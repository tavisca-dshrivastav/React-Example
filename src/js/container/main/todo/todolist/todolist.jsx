import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
class ToDoList extends React.Component {
    render() {          
           return <table class="table">
           <thead>
               <tr>
                   <th>Index</th>
                   <th>Title</th>
                   <th>Action</th>
               </tr>
           </thead>
           <tbody class="table-body" id="table-body">

           </tbody>
       </table>
    }
}

module.exports = ToDoList;