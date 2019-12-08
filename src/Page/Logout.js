import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: '0',
      // islogin: '1'
    }
    // this.handleChange = this.handleChange.bind(this);
    this.sendLogout = this.sendLogout.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    // this.getall = this.getall.bind(this);
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

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handlerSubmit(event) {
    console.log('submit!');
    this.sendLogout()
    this.setState({
      islogout: '1'
    })
    localStorage.setItem("Login", '0');
    event.preventDefault();
  }

  // componentDidMount(){
  //   var token = localStorage.getItem('Authorization');
  //   axios.defaults.headers.common['Authorization'] = token;
  //   this.getall();
  //   let login = localStorage.getItem('Login');
  //   if(login == 0){
  //     this.setState({
  //       islogin: '0'
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        {(this.state.islogin==='1')&&<Redirect push to='/'></Redirect>}
        <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <h2 className="navtitle"></h2>

            </a>

          </div>
        </nav>
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-md-offset-5">
                <form onSubmit={this.handlerSubmit}>
                  <form className="signup-form">
                    <h3 className="text-center sign">Logout <h6 className="text-right"/></h3>

                    <button type="submit" className="btn btn-primary" onClick={this.handlerSubmit}>Logout</button>
                    {(this.state.logout==='1')&&<Redirect push to='/login'></Redirect>}
                    {/* {
                      (this.state.islogin ==='0')&&<Link to={'/login'}><p style={{padding:'10px'}}>Login</p></Link>
                    }
                     {
                      (this.state.islogin ==='0')&&<Link to={'/register'}><p style={{padding:'10px'}}>Register</p></Link>
                    }
                    {
                      (this.state.islogin ==='1')&&<Link to={'/profil'}><p style={{padding:'10px'}}>Profil</p></Link>
                    }
                    {
                      (this.state.islogin ==='1')&&<Link to={'/edit'}><p style={{padding:'10px'}}>Edit</p></Link>
                    }
                    {
                      (this.state.islogin ==='1')&&<Link to={'/logout'}><p style={{padding:'10px'}}>Logout</p></Link>
                    } */}
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