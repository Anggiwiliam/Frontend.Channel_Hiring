import React, { Component } from 'react';
// import './Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../../Page/Data.css'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default class Hireproject extends Component {
    constructor(props){
        super(props);
        let idEng = this.props.match.params.id
        this.state = {
            name: '',
            skill: '',
            description:'',
            id_engineer:idEng,
            isSubmit: '0',
            arr_engineer: '',
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
            this.sendForm();
        this.setState({
            isSubmit: '1'
        })
        event.preventDefault();
    }

    async editForm() {
        try{
            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'put',
            url: 'http://35.170.248.238:7000/myhire/edit',
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

    

    async sendForm(){
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
          var token = localStorage.getItem('Authorization');
            axios.defaults.headers.common['Authorization'] = token;  
        try{  
          const response = await axios({
            method: 'POST',
            url: 'http://35.170.248.238:7000/myhire/createproject',
            data: {
                   name: this.state.name,
                   skill: this.state.skill,
                   budget: this.state.budget,
                   description: this.state.description,
                   id_engineer: this.state.id_engineer
            }
          })
        }catch(error) {
            console.log(error);
        }
      }

      componentDidMount(){
        var idEng = this.props.match.params.id
      
        
        var token = localStorage.getItem('Authorization');
        axios.defaults.headers.common['Authorization'] = token;
        fetch('http://35.170.248.238:7000/engineer/by/'+idEng  )
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
                    <h3 className="text-center sign">List Project</h3>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Name Project</label>
                      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Wajib di Isi" className="form-control"  required="required" />
                    
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Skill</label>
                      <input type="text" name="skill" value={this.state.skill} onChange={this.handleChange} className="form-control"  />
                     
                    </div>
                    
                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Budget</label>
                      <input type="text" name="budget" value={this.state.budget} onChange={this.handleChange} className="form-control"  />
                     
                    </div>

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">Description</label>
                      <input type="text" name="description" value={this.state.description} onChange={this.handleChange} className="form-control"  />
                      
                    </div>

                    <br></br>
                    <div className="">
                      <button type="submit" className="btn btn-primary">Save</button>
                      <Link to={'/company'}>Back</Link>
                      {/* <Link to="/login">Lewati</Link> */}
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