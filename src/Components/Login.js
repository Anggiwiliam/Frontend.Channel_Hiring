import React, { Component } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
  state= {
    'username': '',
    'password': ''
  }
  handlerChange =(e)=> {
    this.setState({ [e.target.name] : e.target.value })
  }

  handlerSubmit= async (event)=>{
    event.preventDefault()
    console.log(this.state) 
    const response = await axios.post(`http://35.170.248.238:7000/login/`, this.state)
    this.props.history.push('/company/home')
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
          <input type="text" name="username" onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="password" onChange={this.handlerChange} className="form-control" id="exampleInputPassword1" required="required" />
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