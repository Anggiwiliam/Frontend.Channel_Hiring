import React, { Component } from 'react'
import NavbarC from '../Company/NavbarC'
import '../Engineer/Home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './List.css'

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
    axios.get(`http://localhost:4000/myhire/readproject`)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data });
      });
  }
  render() {
    const { items } = this.state
    
    return (
      //   <div className="container">
      //        <div className="center">
      //   <h1>List Project</h1>
      //   <table className="rwd-table">
      //     <tbody><tr>
      //         <th>Name Project</th>
      //         <th>Skill</th>
      //         <th>Budget</th>
      //         <th>Description</th>
      //         <th>Aksi</th>
              
      //       </tr>
      //       <tr>
      //         <td data-th="Movie Title">Star Wars</td>
      //         <td data-th="Genre">Adventure, Sci-fi</td>
      //         <td data-th="Year">1977</td>
      //         <td data-th="Gross">$460,935,665</td>
      //       </tr>
      //       <tr>
      //         <td data-th="Movie Title">Howard The Duck</td>
      //         <td data-th="Genre">"Comedy"</td>
      //         <td data-th="Year">1986</td>
      //         <td data-th="Gross">$16,295,774</td>
      //       </tr>
      //       <tr>
      //         <td data-th="Movie Title">American Graffiti</td>
      //         <td data-th="Genre">Comedy, Drama</td>
      //         <td data-th="Year">1973</td>
      //         <td data-th="Gross">$115,000,000</td>
      //       </tr>
      //       <tr>
            
      //       </tr>


      //     </tbody></table>
        
      // </div>
      //   </div>
      <div className="styles">
        <NavbarC /><br></br>
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
                    
                    <h4 className="text-center">{item.name}</h4>
                    <h6 className="card-text">{item.budget}</h6>
                    <h6 className="card-text">Skill: {item.skill}</h6>
                    <h6 className="text-center">{item.description}</h6><br></br>
                    {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detail</button> */}

                    {/* <Link to={`/editengineer/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>Edit</Link> */}
                    {/* {
                      (this.state.islogin === '1') && <Link to={`/profilengineer/${item.created_by}`} className="btn btn-primary" onClick={this.getUsers}>View More</Link>
                    } */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}