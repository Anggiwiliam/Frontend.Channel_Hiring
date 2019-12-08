import React, { Component } from 'react';
// import axios from 'axios'
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      category: '',
      isChange: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('submit!');
    this.sendLogin()
    event.preventDefault();
  }

  async sendLogin() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/myhire/regis',
        data: {
          username: this.state.username,
          password: this.state.password,
          category: this.state.category
        }
      });
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
      console.log(response.data.result.token);
      this.setState({
        isChange: '1',
        values: this.state.category
      })
    } catch (error) {
      console.log(error);
      this.setState({
        isChange: '2'
      })
    }
  }

  render() {
    if (this.state.values == 0) {
      return <Redirect to={'/dataengineer'} />
    } if (this.state.values == 1) {
      return <Redirect to={'/datacompany'} />
    }

    return (
      <div className="col-md-4 col-md-offset-5">
        <form onSubmit={this.handleSubmit}>
          <form className="signup-form">
            {(this.state.isChange == '2') && <div className="alert alert-danger" role="alert">username already exists </div>}
            <h2 className="text-center sign">Register</h2><h6 className="text-right"><a href="/login">login</a></h6><br></br>

            <div className="form-group">
              <label>Username/Email</label>
              <input type="text" name="username" className="form-control" placeholder="Username"
                value={this.state.username} onChange={this.handleChange} required="required" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Password"
                value={this.state.password} onChange={this.handleChange} required="required" />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control" name='category' type='text' value={this.state.category} onChange={this.handleChange} required="required" >
                <option value='0'>Engineer</option>
                <option value='1'>Company</option>
              </select>
            </div><br></br>

            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">Join Us</button>
            </div>
          </form>
        </form>
        {/* {(this.state.isChange == '1') && <Redirect push to='/dataengineer'></Redirect>} */}
      </div>
    );
  }
}
export default Register