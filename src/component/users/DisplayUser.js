import React, { Component } from 'react';
import UserInfo from "./UserInfo";

export class DisplayUser extends Component {
  
  constructor(){
    super();
    this.state = {
      userInfo : {}
    }
    this.getParamFromUrl = this.getParamFromUrl.bind(this);
  }

  getParamFromUrl(param){
    fetch(`https://api.github.com/users/${param}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({userInfo : data})
        })
      
  }

  render() {
    return (
      <div className='container mt-5'>
          <UserInfo getParam={this.getParamFromUrl} />
          <h1>Display User Info</h1>
          <hr />
          <div className="row g-3">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img src={this.state.userInfo.avatar_url} alt="Avatar" style={{width:"70%"}} />
            </div>
            <div className="col-md-6 pt-4">
              <p><span className='fw-bold'>ID :</span> {this.state.userInfo.id}</p>
              <p><span className='fw-bold'>Login :</span> {this.state.userInfo.login}</p>
              <p><span className='fw-bold'>Bio :</span> {this.state.userInfo.bio == null ? " Empty " : this.state.userInfo.bio}</p>
              <p><span className='fw-bold'>Location :</span> {this.state.userInfo.location == null ? " No Location Set " : this.state.userInfo.location}</p>
              <p><span className='fw-bold'>Email :</span> {this.state.userInfo.email == null ? " No Email Linked " : this.state.userInfo.email}</p>
              <p><span className='fw-bold'>Twitter :</span> {this.state.userInfo.twitter_username == null ? " No Account Linked " : this.state.userInfo.twitter_username}</p>
              <p><span className='fw-bold'>Followers :</span> {this.state.userInfo.followers}</p>
              <p><span className='fw-bold'>Following :</span> {this.state.userInfo.following}</p>
              <a className='btn btn-info w-100' href="/allUsers">Back to list</a>
            </div>
          </div>
      </div>
    )
  }
}

export default DisplayUser