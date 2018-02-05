import React, { Component } from 'react';
import './bootstrap.min.css';

class ListComponent extends Component {
     render() {
        console.log('eee', this.props.repos);
        const repoList = (this.props.repos === 0
                ? <li className="list-group-item text-center">Username not found</li>
                : this.props.repos.map((data, idx) => {
                return <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={data.id}>{data.name}
                            <span className="badge badge-primary badge-pill">{data.stargazers_count} stars</span>
                        </li>
        }));
        return (
            <ul className="list-group">
              {repoList}
            </ul>
        );
    }
}

export default ListComponent;
