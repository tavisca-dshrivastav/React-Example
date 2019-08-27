import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDoList: this.props.toDoList
        }
    }
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
                {this.state.toDoList.map(data => {
                    return <tr id={"todo-"+data.id}>
                    <td>{data.id}</td>
                    <td  id={"data-"+data.id}>{data.title}</td>
                    <td id={"util-"+data.id}>
                    <a className="item-utility" id={"edit-"+ data.id} href="#">edit</a>
                    <a className="item-utility" id={"upd-"+ data.id}  href="#">delete</a>
                    </td>
                    </tr>
                })}
           </tbody>
       </table>
    }
}

module.exports = ToDoList;