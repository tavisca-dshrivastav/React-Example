import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import Navigation from './navigation/navigation.jsx'
import Section from './main/main.jsx'

class Container extends React.Component {
    render() {          
           return <div className = 'container'>
                    <Navigation/>
                    <Section/>
                    </div>
                 
    }
}

module.exports = Container;