import React, { Component } from 'react';
// import './Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../Engineer/Home.css'
import NavbarC from './NavbarC';

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default class EditCompany extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            gender: '',
            date_of_birth:'',
            email:'',
            phone_number:'',
            location:'',
            skill:'',
            showcase:'',
            description:'',
            photo: null,
            isSubmit: '0',
            arr_engineer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            formData.append('email', this.state.email)
            formData.append('phone_number', this.state.phone_number)
            formData.append('location', this.state.location)
            formData.append('required_skill', this.state.required_skill)
            formData.append('description', this.state.description)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'put',
            url: 'http://localhost:4000/myhire/edit',
            data: formData
            
          });
            console.log(response.data.result.token);
        }catch(error) {
            console.log(error);
        }
    }
    
    componentDidMount(){
      var idEng = this.props.match.params.id
    
      
      var token = localStorage.getItem('Authorization');
      axios.defaults.headers.common['Authorization'] = token;
      fetch('http://localhost:4000/company/by/'+idEng  )
      .then(response => response.json())
      .then(data => this.setState({ arr_engineer: data[0] })      )
      let login = localStorage.getItem('Login');
      // console.log('data:'+data);
      // console.log(this.state.arr_engineer);
      
      
      if(login == 0){
          this.setState({
              isLogin: '0'
          });
      }
    }


  render() {
    return (
         
      <div className="styles">
        {/* <NavbarC/> */}
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
                    <h3 className="text-center sign">Edit Profil Company</h3>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input type="text" name="name" defaultValue={this.state.arr_engineer.name} onChange={this.handleChange} className="form-control"  required="required" />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"  />
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Date of Birth</label>
                      <input type="date" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} className="form-control"  />
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
                      <label htmlFor="exampleInputEmail1">Required Skill</label>
                      <input type="text" name="required_skill" value={this.state.required_skill} onChange={this.handleChange} className="form-control" />
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
                      
                      <Link to="/company">Back</Link>
                    </div>
                  </form>
                </form>
                {(this.state.isSubmit==='1')&&<Redirect push to='/company'></Redirect> }
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