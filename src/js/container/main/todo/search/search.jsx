
import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import AutoPopulate from './autopopulate/autopopulate.jsx'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDoList : props.toDoList
        }; 
        // this.hidePopup = this.hidePopup();
        console.log(props.toDoList);
    }
    render() {          
           return(
            <div className="search-box">
                    <form className="form" action="" autoComplete="false">
                         <input type="text" onBlur={this.hidePopup} onkeypress="return showSuggestion(this.value);" onkeyup="return showSuggestion(this.value);" onkeydown="return showSuggestion(this.value);" name="name" id="search-value"/>
                         <input type="button" value="search"/>
                         <input type="button" onClick={this.props.updateState} value="add"/>
                        <AutoPopulate/>
                </form>
            </div>
            );
    }
    
    // hidePopup(){
    //     console.log(this.state.toDoList);
    //     this.state.toDoList[0].title = "deepak";
    //     console.log(this.props.updateState);
    //     // this.updateState;
    // }
}

module.exports = Search;























