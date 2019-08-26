import React from 'react';
import ReactDOM from 'react-dom'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Container from './container/container.jsx'

// const rootElement = document.getElementById('content');


// const ele = React.createElement('div', {
//     className: 'main',
    
// }, "Hello this is deepak");

class App extends React.Component{
    render(){
        // const content = 'Hello Everyone';
        return <div className='main'>
                <Header name = 'This is todo list'/>
                <Container/>
                <Footer name = '@Copyright Deepak Shrivastav'/>
            </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);






// const ele = <div className="main">Hello World</div>;
// ReactDOM.render(ele, rootElement);