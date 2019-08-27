import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';

class Header extends React.Component {
    render() {          
           return <header className = 'header' >
                <h1 className = 'title'> { this.props.name }</h1> 
                 </header>
    }
}
module.exports= Header;