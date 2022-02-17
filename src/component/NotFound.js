import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFount extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <h1>404 Page Not Found !</h1>
        <p>The page wich your looking for is not found, please try again !</p>      
        <Link className='btn btn-info' to="/">Back To Home Page</Link>      
      </div>
    )
  }
}

export default NotFount