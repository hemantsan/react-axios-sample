import React, { Component } from 'react';
import './bootstrap.min.css';

class SearchComponent extends Component {

    constructor() {
        super();
        this.find = this.find.bind(this);
    }

    find(e) {
        this.props.handleClick(this.refs.username.value);
    }

     render() {
        return (
            <div className="form-group mb-0">
                <label className="mb-0">find github users</label><br/>
                <label>eg: viecky, DrkSephy, Chalarangelo</label><br/>
                <div className="input-group">
                    <input type="text" className="form-control" ref="username" placeholder="eg: viecky, DrkSephy, Chalarangelo" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={this.find}> Find </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchComponent;
