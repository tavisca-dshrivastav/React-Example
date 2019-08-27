
import React from 'react';
// import ReactDOM from 'react-dom'
// import './header.css';
import AutoPopulate from './autopopulate/autopopulate.jsx'

class Search extends React.Component {
    render() {          
           return(
            <div className="search-box">
                    <form className="form" action="" autocomplete="false">
                         <input type="text" onblur={this.hidePopup} onkeypress="return showSuggestion(this.value);" onkeyup="return showSuggestion(this.value);" onkeydown="return showSuggestion(this.value);" name="name" id="search-value"/>
                         <input type="button" value="search"/>
                         <input type="button" onClick={this.add} value="add"/>
                        <AutoPopulate/>
                </form>
            </div>
            );
    }
}

module.exports = Search;























