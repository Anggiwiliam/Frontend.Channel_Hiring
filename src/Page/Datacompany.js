import React, { Component } from 'react';
// import './Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../Page/Data.css'

export default class Datacompany extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        phone_number:'',
        location:'',
        required_skill:'',
        description:'',
        photo: null,
        isSubmit: '0'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendForm = this.sendForm.bind(this);
}

fileChange = event => {
    console.log(event.target.files[0]); 
    this.setState({
        photo: event.target.files[0]
    });  
}

handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    [name]: value
    });
}

handleSubmit(event) {
    console.log('submit!');
   
        console.log('create!');
        this.sendForm();
    this.setState({
        isSubmit: '1'
    })
    event.preventDefault();
}

async sendForm() {
    try{
      var token = localStorage.getItem('Authorization');
      axios.defaults.headers.common['Authorization'] = token;
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('phone_number', this.state.phone_number)
        formData.append('location', this.state.location)
        formData.append('required_skill', this.state.required_skill)
        formData.append('description', this.state.description)
        formData.append('photo', this.state.photo, this.state.photo.name);
        console.log(formData)
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/myhire/form/',
        data: formData
        
      });
        console.log(response.data.result.token);
    }catch(error) {
        console.log(error);
    }
}
  render() {
    return (
      <div className="stylis">
        <nav className="navbar fixed-top navbar-toggleable-lg navbar-dark ">
        </nav>
        <section id="Datas">
          <div className="container">
            <div className="row mt-2">
              <div className="col-md-3 caption text-center">
              </div>
              <div className="col-md-6">
                <form>
                  <form className="signup-form">
                    <h3 className="text-center sign">Form Profil Company</h3>

                    <div className="">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input type="text" name="name"  onChange={this.handleChange} placeholder="Wajib di Isi" className="form-control"  required="required" />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"  />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Phone Number</label>
                      <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} className="form-control"  />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Location</label>
                      <input type="text" name="location" value={this.state.location} onChange={this.handleChange} className="form-control"  />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Reuired Skill</label>
                      <input type="text" name="required_skill" value={this.state.required_skill} onChange={this.handleChange} className="form-control" />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Description</label>
                      <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputPassword1">photo</label>
                      <input type="file" name="photo"  onChange={this.fileChange} placeholder="Wajib Di isi"  className="form-control" required="required"  />
                    </div>
                    <br></br>
                    <div className="">
                      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                      {/* <Link to="/login">Lewati</Link> */}
                    </div>
                  </form>
                </form>
                {(this.state.isSubmit==='1')&&<Redirect push to='/login'></Redirect> }
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}