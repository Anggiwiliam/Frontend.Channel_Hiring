import React, { Component } from 'react';
// import './Login.css'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import '../../Page/Data.css'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default class Hire extends Component {
    constructor(props){
        super(props);
        let idEng = this.props.match.params.id
        this.state = {
            id: this.props.id,
            created_by: idEng,
            job:'',
            isSubmit: '0',
            arr_engineer: '',
            selectedOptions: [],
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
        },()=>{
          console.log(this.state)
        });
    }
    
   
  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state)
    const response = await axios.post(`http://localhost:4000/hire/create/`, this.state)
    console.log(response)
    

  }

    async editForm() {
        try{
            let formData = new FormData();
            formData.append('id', this.state.id)
            formData.append('created_by', this.state.created_by)
            formData.append('job', this.state.job);
            
            
          const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/hire/create',
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
      fetch('http://localhost:4000/engineer/by/'+idEng  )
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
    // async componentDidMount() {
    //     const response = await axios.get(`http://localhost:4000/myhire/readproject`);
    //     const res = response.data.result;
    //     if (response.data) {
    //       const arr_pro = res.map(i => ({
    //         value: i.id_project,
    //         label: i.project_name
    //       }));
    //       this.setState({ arr_project: arr_pro });
    //     }
    //   }

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
                      <label htmlFor="exampleInputEmail1">Project</label>
                      <input type="text" name="id" defaultValue={this.state.name} onChange={this.handleChange} className="form-control"  required="required" />
                    </div>

                    {/* <div className="form">
                      <label htmlFor="exampleInputEmail1">Id Engineer</label>
                      <input type="text" name="created_by" value={this.state.arr_engineer.created_by} onChange={this.handleChange} className="form-control"  />
                    </div> */}

                    <div className="form">
                      <label htmlFor="exampleInputEmail1">job</label>
                      <input type="text" name="job" value={this.state.job} onChange={this.handleChange} className="form-control"  />
                    </div>

                   
                    <br></br>
                    <div className="">
                      <button type="submit" className="btn btn-primary">Save</button>
                      
                      <Link to="/company">Back</Link>
                    </div>
                  </form>
                  {(this.state.isSubmit==='1')&&<Redirect push to='/company'></Redirect> }
                </form>
                
                  
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}