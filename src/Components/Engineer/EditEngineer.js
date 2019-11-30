import React, {Component} from 'react'
import axios from 'axios'

export default class EditEngineer extends Component {
    state={
        engineerid:'',
        name:'',
        description:'',
        skill:'',
        location:''
    }
    componentDidMount= async ()=>{
        const engineerid = this.props.match.params.engineerid
        const res = await axios.get('http://localhost:5000/engineer?engineerid='+engineerid)
        this.setState({
            engineerid: res.data.engineerid,
            name: res.data.name,
            description: res.data.description,
            skill: res.data.skill,
            location: res.data.location
        })
    console.log(this.setState)
    }
    handlerChange =(e)=> {
        this.setState({ [e.target.name] : e.target.value })
      }
    
      handlerSubmit= async (event)=>{
        event.preventDefault()
        console.log(this.state) 
        await axios.patch(`http://localhost:5000/engineer/`, this.state)
    
      }
    render(){
        const {name,description,skill,location} = this.state
        return(
            <div className="container">
                
                        <form onSubmit={this.handlerSubmit}>
                        <tr>
                      <td>Username</td>
                      <td><input type="text" name="name" value={name} onChange={this.handlerChange}></input></td>
                        </tr>
                        <tr>
                      <td>Password</td>
                      <td><input type="text" name="description" value={description} onChange={this.handlerChange}></input></td>
                        </tr>
                        <tr>
                        <td>Username</td>
                      <td><input type="text" name="skill" value={skill} onChange={this.handlerChange}></input></td>
                        </tr>
                        <tr>
                      <td>Password</td>
                      <td><input type="text" name="location" value={location} onChange={this.handlerChange}></input></td>
                        </tr>
                        <tr>
                      
                      <td>Tambah Biodata</td>
                      <td><input type="submit" value="add" className="btn btn-primary"></input></td>
                        </tr>
                        </form>
                  
            </div>
        );
    }
}