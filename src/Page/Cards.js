import React, { Component } from 'react';
import axios from 'axios'
import Navbarr from '../Page/Navbar';
import '../Components/Company/HomeC'
import '../Components/css/bootstrap.css'
import { Link } from 'react-router-dom'




class Cards extends Component {
  constructor() {
    super();
    this.state = {
      items: [],

    };

  }

  componentDidMount() {
    axios.get(`http://localhost:4000/engineer/read`)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data });
      });
  }
  render() {
    const { items } = this.state
    return (
     <div>
      
      <div>
        
      <div className="styles">
        {/* <NavbarC/><br></br> */}

        <div class="container my-1 py-2 text-right">
        <form id="demo-1">
            <input type="search" placeholder="Search Software Engineer" />
          </form>

          <div className="row">
            {items.map((item, index) =>
              <div key={index}>
                <div className="card-body  ml-1 mt-2" >
                  <div className="card" style={{ width: '15rem' }}>
                  
                    <img width="400" height="200" src={`http://localhost:4000/myhire/file/` + item.photo} className="card-img-top" alt="..." />

                    <h4 className="text-center">{item.name}</h4>
                    <h6 className="card-text">{item.email}</h6>
                    <h6 className="card-text">{item.description}</h6>
                    <h6 className="card-text">Skill: {item.skill}</h6>
                    <h6 className="card-text">{item.description}</h6>
                    <h6 className="text-center">{item.showcase}</h6><br></br>
                    {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button> */}
                    {/* <Link to={"/detailcard/" + item.engineerid}>detai</Link> */}
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detail</button> */}
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
      </div>
      </div>



    );
  }
}

export default Cards;