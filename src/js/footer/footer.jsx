import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';

class Header extends React.Component {
    render() {          
           return <footer className = 'footer' >
                <h6>{this.props.name}</h6>
                 </footer>
    }
}

module.exports = Header;