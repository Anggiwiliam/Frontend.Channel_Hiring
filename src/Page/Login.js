import React, { Component } from 'react';
import '../Page/Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isvalid: '0'
    }
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  handlerChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlerSubmit(event) {
    console.log('submit');
    this.sendLogin();
    event.preventDefault()
  }
  // console.log(this.state)
  // const response = await axios.post(`http://localhost:5000/login/`, this.state.form)
  // this.props.history.push('/company')
  // console.log(response)
  // localStorage.setItem("JWT", JSON.stringify(response.data));
  // const response =  await axios.post(`http://localhost:5000/login/`, this.state.form)
  // .then(res => {
  //   this.setState({
  //     login: this.state.form.role_id
  //   })
  //   console.log(this.state.form.role_id)
  //   // localStorage.setItem("JWT", JSON.stringify(response.data));
  // }).catch(err => {
  //   if (err.response) {
  //     return console.log(err.response.data)
  //   }
  //   if (err.request) {
  //     return console.log('error from request', err.request);
  //   }
  //   else {
  //     console.log(err)
  //   }
  // })
  // console.log(this.state)
  // const response = await axios.post(`http://35.170.248.238:7000/myhire/login`, this.state.form)
  // this.props.history.push('/dataengineer')
  // console.log(response)
  // localStorage.setItem("JWT", JSON.stringify(response.data));
  async sendLogin() {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://35.170.248.238:7000/myhire/login/',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      });
      axios.defaults.headers.common['Authorization'] = response.data.result.token;
      localStorage.setItem("Authorization", response.data.result.token);
      localStorage.setItem("Login", '1');
      this.setState({
        isvalid: '2'
      })
    } catch (error) {
      console.log(error);
      this.setState({
        isvalid: '1'
      })
    }
  }

  render() {

    // if (this.state.login == 1) {
    //   return <Redirect to={'/engineer'} />
    // } if (this.state.login == 2) {
    //   return <Redirect to={'/company'} />

    // }
    return (
      <div>
        <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h2 className="navtitle">Partner <img width="200" height="100" src="https://miro.medium.com/max/1200/1*5Al34czqpFDD1cXK45ifMw.png" /></h2>
            </a>
          </div>
        </nav>
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="col-md-4 caption text-center" />
              <div className="col-md-4 col-md-offset-5">
                <form onSubmit={this.handlerSubmit}>
                  <form className="signup-form">
                  {(this.state.isvalid === '1')&& <div className="alert alert-danger" role="alert">Username or Password invalid</div>}
               
                    <h3 className="text-center sign">Login <h6 className="text-right"><Link to="/">Register</Link></h6> </h3>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Username/Email</label>
                      <input type="text" name="username" onChange={this.handlerChange} value={this.state.username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" name="password" onChange={this.handlerChange} value={this.state.password} className="form-control" id="exampleInputPassword1" required="required" />
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <Link to={'/'}>Ho</Link> */}
                    {(this.state.isvalid==='2')&&<Redirect push to="/company"></Redirect>}
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