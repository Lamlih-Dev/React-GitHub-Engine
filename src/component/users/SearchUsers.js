import React, { Component } from 'react'

class SearchUsers extends Component {
  
  state = {
    search : ""
  }

  handleForm = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  searchForUsers = (e) => {
    e.preventDefault();
    this.props.getUsersFromGit(this.state.search);
  }

  render() {
    return (
      <div>
        <form id='search-form' onSubmit={this.searchForUsers}>
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Search for users</label>
                <input onChange={this.handleForm} type="text" className="form-control" id="search" autoComplete="off" />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-5">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchUsers