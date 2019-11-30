import React, { Component } from 'react';
import axios from 'axios'
import NavbarC from './NavbarC';
import './HomesC.css'
import '../css/bootstrap.css'



class HomeC extends Component {
  constructor() {
    super();
    this.state = {
      items : [],
     
    };
    
  }
  // componentDidMount(){
  //   fetch("http://localhost:5000/engineer")
  //   .then(response => response.json())
  //   .then(data => this.setState({ items : data}))
  // }

    componentDidMount(){
      axios.get(`http://localhost:5000/engineer`)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data});
      });
    }
    render() {
      const {items} = this.state
        return(
            <div>
                <NavbarC/><br></br>
                
                <div className="text-right">
                    
                <form id="demo-1">  
          <input type="search" placeholder="Search" />
        </form>
        <div className="text-center"><h2>List Software Engineer</h2> </div>
        </div>

           <div class="container my-1 py-2 text-left">
             
              <div className="row">
              {items.map((item, index) =>             
               
              <div key={index}>
              {/* <br></br>            */}
       <div className="card-body  ml-1 mt-2" >
        <div className="card" style={{width: '15rem'}}>
        <img  width="400" height="200" src={`http://localhost:5000/image/`+item.foto} className="card-img-top" alt="..." />
       
        <h4 className="text-center">{item.name}</h4>
        <h6 className="card-text">Skill: {item.skill}</h6>
        <h6 className="card-text">{item.description}</h6>
        <h6 className="text-center">{item.showcase}</h6><br></br>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Detail</button>
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

export default HomeC;