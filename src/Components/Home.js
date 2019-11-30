import React, {Component} from 'react'
import './Home.css'
import axios from 'axios'
import Register from '../Components/Register'

class Homes extends Component {
  // state= {
  //   'username': '',
  //   'password': '',
  //   'role_id': ''
  // }
  // handlerChange =(e)=> {
  //   this.setState({ [e.target.name] : e.target.value })
  // }

  // handlerSubmit= async (event)=>{
  //   event.preventDefault()
  //   console.log(this.state) 
  //   await axios.post(`http://localhost:5000/register/`, this.state)
  //   this.props.history.push('/login')

  // }

    render() {
        return(
            <div >
              
               <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
             <h2 className="navtitle">Hiring Channel <h3>Partner <img width="200" height="100" src="https://miro.medium.com/max/1200/1*5Al34czqpFDD1cXK45ifMw.png"/></h3></h2>
             
            </a>
           
          </div>
        </nav>
        <section id="homes">
        <div className="container">
          <div className="row">
            {/* Introduction */}
            <div className="col-md-8 caption text-center">
            {/* <img src={landing} className="rightbar"/> */}
              <h1 className="titles">Welcome to Hiring Channel</h1>
              <h2>
                <span className="animated-text" />
                <span className="typed-cursor" />
              </h2>
              <h1 className="desc">Looking For a Software Engineer ?</h1>
              <h1 className="desc">Come On Join Us.. </h1>
              <h1 className="desc">Find Experienced Software Engineer <br/></h1>
              <h1 className="desc">on the Hiring Channel</h1><br/>
           
            </div>
            {/* Sign Up */}
            <Register/>
            
           
            
          </div>
        </div>
      </section>
      
 
            </div>
            
        );
    }
}

export default Homes ;