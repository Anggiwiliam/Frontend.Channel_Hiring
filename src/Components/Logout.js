import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Logout extends Component {
  state= {
    'jwt': ''
  }
  handlerChange =(e)=> {
    this.setState({ [e.target.name] : e.target.value })
  }

  handlerSubmit= async (event)=>{
    event.preventDefault()
    console.log(this.state) 
    const response = await axios.patch(`http://localhost:5000/logout/`, this.state)
    this.props.history.push('/navbar')
    console.log(response)
    localStorage.setItem("JWT", JSON.stringify(response.data));


  }
    render() {
        return(
            <div>
              <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
             <h2 className="navtitle">Hiring Channel <h3>Partner <img width="200" height="100" src="https://miro.medium.com/max/1200/1*5Al34czqpFDD1cXK45ifMw.png"/></h3></h2>
             
            </a>
            
          </div>
        </nav>
        <section id="login">
        <div className="container">
          <div className="row">
            {/* Introduction */}
            <div className="col-md-4 caption text-center">
            {/* <img src={landing} className="rightbar"/> */}
              
           
            </div>
            {/* Sign Up */}
            
            <div className="col-md-4 col-md-offset-5">
             <form onSubmit={this.handlerSubmit}> 
              <form className="signup-form">
                <h3 className="text-center sign">Login <h6 className="text-right"><Link to="/">Register</Link></h6> </h3>
                
              
                <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username/Email</label>
          <input type="text" name="jwt" onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        
        <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              </form>
            </div>
            
          </div>
        </div>
      </section>
                 </div>
        );
    }
}