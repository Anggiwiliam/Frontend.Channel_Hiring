import React, { Component } from 'react';
import '../Page/css/Navbar.css'
import { Link, Redirect } from 'react-router-dom'
import Home from '../Page/Home'
import Cards from './Cards';
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


class Navbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: '0',
      islogin: '1'
    }
    this.sendLogout = this.sendLogout.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    // this.getall = this.getall.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    // this.getall();
    let login = localStorage.getItem('Login');
    if(login == 0) {
      this.setState({
        islogin: '0'
      });
    }
  }

  async sendLogout() {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:4000/myhire/logout',
      });
      console.log(response.data.result);
      localStorage.removeItem("Authorization");
    } catch (error) {
      console.log(error)
    }
  }

  handlerSubmit(event) {
    console.log('submit!');
    this.sendLogout()
    this.setState({
      islogout: '1'
    })
    localStorage.setItem("Login", '0');
    event.preventDefault();
  }
  render() {
    return (

      <div>
        {(this.state.islogin === '1') && <Redirect push to='/navbar'></Redirect>}
        <nav className="navbar navbar-expand-lg navbar-light bg-light"><ul></ul><ul></ul>
          <img width="100" height="80" src="https://miro.medium.com/max/1200/1*5Al34czqpFDD1cXK45ifMw.png" />
          <h5>Hiring Channel</h5>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/navbar">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>

            {(this.state.islogout === '1')&& <Redirect push to='/login'></Redirect>}
            
            {
              (this.state.islogin === '0')&& <Link to={'/'}><p className="fa fa-home fa-2x" style={{ padding:'10px'}}></p></Link>
            }
            {/* {
              (this.state.islogin === '0')&& <Link to={'/register'}><p style={{ padding:'10px'}}>Register</p></Link>
            } */}
            {
              (this.state.islogin === '1')&& <Link to={'/profilengineer'} className="fa fa-user fa-2x" style={{ padding:'10px'}}></Link>
            }
            {
              (this.state.islogin === '1')&& <Link to={'/edit'} className="fa fa-edit fa-2x" style={{ padding:'10px'}}></Link>
            }
            {
              (this.state.islogin === '1')&& <a className="fa fa-sign-out fa-2x" style={{ padding:'10px'}} onClick={this.handlerSubmit}></a>
            }

            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
        
       <Cards/>
      </div>
    );
  }
}

export default Navbarr;