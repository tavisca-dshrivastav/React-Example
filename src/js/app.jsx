import React from 'react';
import ReactDOM from 'react-dom'


// const rootElement = document.getElementById('content');


// const ele = React.createElement('div', {
//     className: 'main',
    
// }, "Hello this is deepak");

class App extends React.Component{
    render(){
        const content = 'Hello Everyone';
        return <div className='main'>
                ${content}
            </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);






// const ele = <div className="main">Hello World</div>;
// ReactDOM.render(ele, rootElement);