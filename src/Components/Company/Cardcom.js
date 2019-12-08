import React, { Component } from 'react'
import NavbarC from '../Company/NavbarC';
import '../Engineer/Home.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Cardcom extends Component {
  constructor() {
    super();
    this.state = {
      items: [],

    };

  }

  componentDidMount() {
    axios.get(`http://35.170.248.238:7000/company/read`)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data });
      });
  }
  render() {
    const { items } = this.state
    return (
      <div className="styles">
        <NavbarC /><br></br>
        <div className="text-right">

          {/* <div className="text-center"><h2>List Software Engineer</h2> </div> */}
        </div>
        <div class="container my-1 py-2 text-right">
          {/* <form id="demo-1">
            <input type="search" placeholder="Search Software Engineer" />
          </form> */}
          <div className="row">
            {items.map((item, index) =>
              <div key={index}>
                {/* <br></br>            */}
                <div className="card-body  ml-1 mt-2" >
                  <div className="card" style={{ width: '15rem' }}>
                    <img width="400" height="200" src={`http://35.170.248.238:7000/myhire/file/` + item.logo} className="card-img-top" alt="..." />
                    <h4 className="text-center">{item.name}</h4>
                    <h6 className="card-text">{item.email}</h6>
                    <h6 className="card-text">{item.location}</h6>
                    <br></br>
                    <Link to={`/profilcompany/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>Detail</Link>
                     <br>
                    </br> <Link to={`/editcompany/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>Edit</Link>
                    
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