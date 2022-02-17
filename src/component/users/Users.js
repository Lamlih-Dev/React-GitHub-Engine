import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    constructor(){
        super();
        this.state = {
            users : [],
            userinfo : []
        }
    }

    getUsersFromApi(){
        fetch('https://api.github.com/users')
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({
                users : data
            })
        })
    }
    
    componentDidMount(){
        this.getUsersFromApi();  
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row g-2">
                    {
                        this.state.users.map(user => 
                            (
                                <div className="col-md-4 p-2" key = {user.id}>
                                    <User 
                                        avatar_url = {user.avatar_url}
                                        login = {user.login}
                                        html_url = {user.html_url}
                                    />
                                </div>
                            )
                        )  
                    }
                </div>
            </div>
        );
    }
}

export default Users