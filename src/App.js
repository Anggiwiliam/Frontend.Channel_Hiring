import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbarr from './Components/Navbar'
import Cards from './Components/Cards'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/Register';
import HomeE from './Components/Engineer/HomeE'
import ProfilEngineer from './Components/Engineer/ProfilEngineer';
import NavbarC from './Components/Company/NavbarC';
import ProfilCompany from './Components/Company/ProfilCompany';
import HomeC from './Components/Company/HomeC';
import EditEngineer from './Components/Engineer/EditEngineer';
import NavbarE from './Components/Engineer/NavbarE';





class App extends Component {
  render() {
    return (
       <Router>
        <div>
       <Route exact path='/' component={Home}/>
       <Route path='/login' component={Login}/>
       <Route path='/navbar' component={Navbarr}/>
       <Route path='/register' component={Register}/>
       <Route path='/card' component={Cards}/>
       <Route path='/engineer/home' component={HomeE}/>
       <Route path='/engineer/profil' component={ProfilEngineer}/>
       <Route path='/engineer/detail/:engineerid' component={EditEngineer}/>
       {/* <Route path='/engineer/' component={NavbarE}/> */}
       <Route path='/company/home' component={HomeC}/>
       <Route path='/company/profil' component={ProfilCompany}/>
       

        </div>
        </Router>  
      
    );
  }
}

export default App;
