import React, { Component } from 'react';
// import './Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../Page/Data.css'
import Navbarr from './Navbar';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default class Editform extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date_of_birth:'',
            email:'',
            phone_number:'',
            location:'',
            skill:'',
            showcase:'',
            description:'',
            photo: null,
            isSubmit: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.editForm = this.editForm.bind(this);
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
            this.editForm();
        this.setState({
            isSubmit: '1'
        })
        event.preventDefault();
    }

    async editForm() {
        try{
            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('date_of_birth', this.state.date_of_birth)
            formData.append('email', this.state.email)
            formData.append('phone_number', this.state.phone_number)
            formData.append('location', this.state.location)
            formData.append('skill', this.state.skill)
            formData.append('showcase', this.state.showcase)
            formData.append('description', this.state.description)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'put',
            url: 'http://localhost:4000/myhire/edit',
            data: formData
            // data: {
            //     name: this.state.name,
            //     photo: this.state.photo,
            //     gender: this.state.gender,
            //     date_of_birth: this.state.date_of_birth,
            //     email: this.state.email,
            //     phone_number: this.state.phone_number, 
            //     location: this.state.location,
            //     skill: this.state.skill,
            //     showcase: this.state.showcase,
            //     description: this.state.description
            // }
          });
            console.log(response.data.result.token);
        }catch(error) {
            console.log(error);
        }
    }

    async sendForm() {
        try{
            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/myhire/form',
            data: formData
            // data: {
            //     name: this.state.name,
            //     photo: this.state.photo,
            //     gender: this.state.gender,
            //     date_of_birth: this.state.date_of_birth,
            //     email: this.state.email,
            //     phone_number: this.state.phone_number, 
            //     location: this.state.location,
            //     skill: this.state.skill,
            //     showcase: this.state.showcase,
            //     description: this.state.description
            // }
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
                <form onSubmit={this.handleSubmit}>
                  <form className="signup-form">
                    <h3 className="text-center sign">Edit Profil</h3>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"  required="required" />
                    
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Date of Birth</label>
                      <input type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} className="form-control"  />
                     
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
                      <label htmlFor="exampleInputEmail1">Skill</label>
                      <input type="text" name="skill" value={this.state.skill} onChange={this.handleChange} className="form-control" />
                    
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Show Case</label>
                      <input type="text" name="showcase" value={this.state.showcase} onChange={this.handleChange} className="form-control" />
                  
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Description</label>
                      <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" />
                     
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputPassword1">Foto</label>
                      <input type="file" name="photo"  onChange={this.fileChange}  className="form-control"  />
                    </div>
                    <br></br>
                    <div className="">
                      <button type="submit" className="btn btn-primary">Save</button>
                      
                      <Link to="/navbar">Back</Link>
                    </div>
                  </form>
                </form>
                {(this.state.isSubmit==='1')&&<Redirect push to='/engineer'></Redirect> }
                    {/* <Link to={'/'}>
                            <p style={{padding:'10px'}}>Back</p>
                    </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}