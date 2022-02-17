import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="home-content container">
            <h1 className='mb-5'>Welcome To Github Users Engine</h1>
            <p>Thanks to this app you can display all users from github app 
              with the possibility to search for a specific user or users</p>
            <p>So what are you waiting for ! <Link className='btn btn-primary' to="/allUsers">Click here</Link> to display all users 
                or <Link className='btn btn-primary' to="search">Click here</Link> to search for a specific user</p>
      </div>    
    )
  }
}

export default Home