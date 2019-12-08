import React, { Component } from 'react';
// import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Detailcard extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        'engineerid': '',
        'name': '',
        'description': '',
        'skill': '',
        'location': '',
        'dob': '',
        'showcase': '',
        'foto': ''
    
        }
    }
  }
 

  componentDidMount() {
    const engineerid = this.props.match.params.engineerid
    axios.get(`http://localhost:5000/engineer?=` + engineerid)
    .then(res => {
      console.log(res)
      this.setState({form: res.data})
    })
    console.log(this.setState)
  }

  // componentDidMount = async () => {
  //   const engineerid = this.props.match.params.engineerid
  //   const res = await axios.get(`http://localhost:5000/engineer?engineerid=` + engineerid)
  //   console.log(res)
  //   console.log(engineerid)

  //   this.setState({
  //     form: res.data
  //   })
  //   console.log(this.setState)
  
  // }

  handlerChange = (event) => {
    let data = { ...this.state.form};
    data[event.target.name] = event.target.value;
    this.setState({ 
      form: data
     }, () => {
       console.log(this.state.form)
     })
  }

  // handlerSubmit = async (event) => {
  //   event.preventDefault()
  //   console.log(this.state)
  //   const response = await axios.post(`http://localhost:5000/engineer/`, this.state)
  //   console.log(response)
  //   this.props.history.push('/login')

  // }
  render() {
    const { name, description, skill, location, dob, showcase, foto } = this.state
    return (
      <div>
        <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
        </nav>
        <section id="login">
          <div className="container">
            <div className="row mt-2">
              <div className="col-md-3 caption text-center">
              </div>

              <div className="col-md-6">
                <form onSubmit={this.handlerSubmit}>
                  <form className="signup-form">
                    <h3 className="text-center sign">Form Profil</h3>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input type="text" name="name" value={name} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className=""></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Description</label>
                      <input type="text" name="description" value={description} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className=""></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Skill</label>
                      <input type="text" name="skill" value={skill} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className="form-text text-muted"></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Location</label>
                      <input type="text" name="location" value={location} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className="form-text text-muted"></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Date Of Bird</label>
                      <input type="text" name="dob" value={dob} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className="form-text text-muted"></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Show Case</label>
                      <input type="text" name="showcase" value={showcase} onChange={this.handlerChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required" />
                      <small id="emailHelp" className="form-text text-muted"></small>
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputPassword1">Foto</label>
                      <input type="text" name="foto" value={foto} onChange={this.handlerChange} className="form-control" id="exampleInputPassword1" required="required" />
                    </div>
                    <br></br>
                    <div className="">
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
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