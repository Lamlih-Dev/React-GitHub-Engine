import React, { Component } from 'react'
import User from './users/User';
import SearchUsers from './users/SearchUsers';

export class Search extends Component {
    constructor(){
        super();
        this.state = {
            users : []
        }
    }

    searchUsersfromGit = (data) => {
        if(!!data){
            fetch(`https://api.github.com/search/users?q=${data}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    users : data.items
                })
            })
        }
    }

  render() {
    return (
        <div className="container mt-3">
            <div className='row' id="SearchUsers">
                <div className="col-md-12">
                    <SearchUsers getUsersFromGit = {this.searchUsersfromGit}/>
                </div>
            </div>
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
    )
  }
}

export default Search