import React, { Component } from 'react';


class NavbarC extends Component{
    render() {
        return(
          
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img width="100" height="60" src="https://miro.medium.com/max/1200/1*5Al34czqpFDD1cXK45ifMw.png"/>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
        
        
          
          
          
        
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
        <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/company/home">Home<span className="sr-only">(current)</span></a>
            </li><ul></ul>
            <li className="nav-item active">
              <a className="nav-link" href="/company/profil">Profil<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="fa fa-comments fa-2x nav-link" href="#"><span className="sr-only">(current)</span></a>
            </li><ul></ul>
            <li className="nav-item active">
              <a className="fa fa-bars fa-2x nav-link" href="#"><span className="sr-only">(current)</span></a>
            </li>
        
                        
          </ul>
      </nav> 
      

          </div>
        );
    }
}

export default NavbarC;