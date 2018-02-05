import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';
import './App.css';
import './bootstrap.min.css';
var Api = require('./Api.js');

class App extends Component {

    constructor() {
        super();
        this.state = {
            allRepos: [],
            username: 'NOUSERSETUP',
        };
        this.find = this.find.bind(this);
    }

    componentDidMount () {
        this.find(this.state.username);
    }

    find(value) {
        var username = value;
        Api.fetchRepos(username)
            .then((repos) => {
                this.setState({
                    allRepos: repos
                });
            });
    }

    render() {
        console.log(this.state.allRepos);
        return (
            <React.Fragment>
            <div className="alert alert-dismissible alert-primary mb-2">
              <strong>React + Axios api call to github users repo api.</strong> 
            </div>
            <div className="card bg-light border-primary mb-3">
                <div className="card-header"><SearchComponent handleClick={this.find}/></div>
                <div className="card-body">
                    <ListComponent repos={this.state.allRepos}/>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default App;
