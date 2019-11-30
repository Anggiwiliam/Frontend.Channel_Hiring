import React, { Component } from 'react';
import axios from 'axios'

export default class Register extends Component {
  state= {
    'username': '',
    'password': '',
    'role_id': ''
  }
  handlerChange =(e)=> {
    this.setState({ [e.target.name] : e.target.value })
  }

  handlerSubmit= async (event)=>{
    event.preventDefault()
    console.log(this.state) 
    await axios.post(`http://localhost:5000/register/`, this.state)
    // this.props.history.push('/login')
  }

    render() {
        return(
          
                 <div className="col-md-4 col-md-offset-5">
             <form onSubmit={this.handlerSubmit}>
              <form className="signup-form">
                <h2 className="text-center sign">Register <h6 className="text-right"><a href="login">Login</a></h6></h2>
                <br></br>
             
                <div className="form-group">
                  <input type="text" name="username" onChange={this.handlerChange} className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" onChange={this.handlerChange}  className="form-control" placeholder="Password" required="required" />
                </div>

          <div className="form-check">
          <input className="form-check-input" type="radio" name="role_id" id="exampleRadios1" onChange={this.handlerChange} defaultValue="1" defaultChecked />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Engineer
          </label>
        </div>
        
        <div className="form-check">
          <input className="form-check-input" type="radio" name="role_id" id="exampleRadios2" onChange={this.handlerChange} defaultValue="2" />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Company
          </label>
        </div>

                <br></br>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary btn-block">Join Us</button>
                </div>
               
              </form>
              </form>
            </div>
            
        );
    }
}