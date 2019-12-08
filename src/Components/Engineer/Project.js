import React, { Component } from 'react'
import NavbarE from '../Engineer/NavbarE';
import '../Engineer/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      islogout: '0',
      islogin: '1'

    };

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

  componentDidMount() {
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://localhost:4000/myhire/readproject')
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
    let login = localStorage.getItem('Login');
    if (login == 0) {
      this.setState({
        isLogin: '0'
      });
    }
  }
  render() {
    const { items } = this.state
    return (
      <div className="styles">
        <NavbarE /><br></br>
        <div className="text-right">

          {/* <div className="text-center"><h2>List Software Engineer</h2> </div> */}
        </div>
        <div class="container my-1 py-2 text-right">
          <form id="demo-1">
            <input type="search" placeholder="Search Software Engineer" />
          </form>
          <div className="row">
            {items.map((item, index) =>
              <div key={index}>
                {/* <br></br>            */}
                <div className="card-body  ml-1 mt-2" >
                  <div className="card" style={{ width: '15rem' }}>
                    <img width="400" height="200" src={`http://localhost:4000/myhire/file/` + item.photo} className="card-img-top" alt="..." />
                    <h4 className="text-center">{item.name}</h4>
                    <h6 className="card-text">{item.email}</h6>
                    <h6 className="card-text">Skill: {item.skill}</h6>
                    <h6 className="text-center">{item.showcase}</h6><br></br>
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detail</button> */}

                    {/* <Link to={`/editengineer/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>Edit</Link> */}
                    {
                      (this.state.islogin === '1') && <Link to={`/profilengineer/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>View More</Link>
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>





        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" className="text-center">Detail Software Engineer</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <tr>Name Engineer</tr>
                <tr>Skill</tr>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}