import React, { Component } from 'react';

export class SearchForm extends Component {

    state = {
        searchForm: false,
        term: ''
    };

    closeSearchForm = () => {
        this.props.onClick(this.state.searchForm);
    }

    handleSearch = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={`searchBoxTop ${this.props.active}`}>
                <div className="seachBoxContainer">
                    <div className="container">
                        <span className="searchClose" onClick={this.closeSearchForm}></span>

                        <form onSubmit={this.handleSearch}>
                            <input 
                                className="form-control"
                                type="search" 
                                placeholder="Type here........" 
                                value={this.state.term}
                                onChange={e => this.setState({term: e.target.value})}
                            />

                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchForm;
