import React, { Component } from 'react';

class User extends Component {

  render() {
    return (
      <div className="card" style={{width : "18rem"}}>
        <img src={this.props.avatar_url} className="card-img-top" alt="User Image" />
        <div className="card-body">
          <h5 className="card-title">{this.props.login}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <a href={this.props.html_url} target="_blank" type="button" class="btn btn-dark">Go To Profile</a>
            <a href={"allUsers/"+this.props.login} type="button" class="btn btn-info">More Info</a>
          </div>
        </div>
      </div>
    )
  }
}


export default User