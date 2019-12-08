import React, { Component } from 'react';
import './Cards.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Cards extends Component {
  constructor() {
    super();
    this.state = {
      items : [],
     
    };
    
  }
  // componentDidMount(){
  //   axios.get(`http://localhost:5000/engineer`)
  //   .then(response => response.json())
  //   .then(data => this.setState({ items : data}))
  // }

    componentDidMount(){
      axios.get(`http://35.170.248.238:7000/engineer`)
      .then(res => {
        console.log(res);
        this.setState({ items: res.data});
      });
    }
    render() {
      const {items} = this.state
        return(
      
           <div class="container my-3 py-5 text-left">
             
            <div className="row">
              {items.map((item, index) =>             
               
              <div key={index}>
      
        <div className="card ml-4 mt-3" style={{width: '15rem'}}>
        <img  width="200" height="150" src="https://selular.id/wp-content/uploads/2019/06/maxresdefault-696x392.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <h4 className="text-center">{item.name}</h4>
        <h6 className="card-text">Skill: {item.skill}</h6>
        <h6 className="card-text">{item.description}</h6>
        <h7 className="text-left">{item.showcase}</h7><br></br>
          <a href="#" className="btn btn-primary">Detail</a>
          <td><Link to={"/engineer/detail/"+item.engineerid}>detail</Link></td>
        </div>
      </div> 
      </div>
      
              )}
              </div> 
               </div>
           
    
            
        );
    }
}

export default Cards;