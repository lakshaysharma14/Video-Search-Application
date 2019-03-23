import React, { Component } from 'react';

class SearchBar extends Component 
{
    constructor(props)
    {
        super(props);
        this.state= 
        { 
            term:"" 
        }
    }

    onInputChange = (e)=>
    {
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) =>
    {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    //----------------------------------------------------------------------
    render()
    {
        // console.log(this.state.term);
        return (
            <div className="search-bar ui segment">
            
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label><b><i><em>Video Search</em></i></b></label>
                <hr />
                <input 
                    type="text"
                    placeholder="Search.."
                    value= {this.state.term}
                    onChange = {this.onInputChange }
                />
                </div>    
            </form>
            
            </div>
        );
    }
}

export default SearchBar;