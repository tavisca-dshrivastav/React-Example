import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import Navigation from './navigation/navigation.jsx'
import Section from './main/main.jsx'
import axios from 'axios'

class Container extends React.Component {
    // state = {
    //     toDoList : []
    // }
    constructor(props){
        super(props);
        this.state = {
            toDoList: []
        }
    }
    render() {          
           return <div className = 'container'>
                    <Navigation toDoList={this.state.toDoList}/>
                    <Section toDoList={this.state.toDoList}/>
                </div>
                 
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
            const toDoList = res.data;
            this.setState({toDoList: toDoList});
        });
    }
   

}

module.exports = Container;