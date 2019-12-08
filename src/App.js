import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbarr from './Page/Navbar'
import Cards from './Page/Cards';
import Login from './Page/Login'
import Home from './Page/Home'
import Register from './Page/Register';
import HomeE from './Components/Engineer/HomeE'
import ProfilEngineer from './Components/Engineer/ProfilEngineer';
import NavbarC from './Components/Company/NavbarC';
import ProfilCompany from './Components/Company/ProfilCompany';
import HomeC from './Components/Company/HomeC';
import EditEngineer from './Components/Engineer/EditEngineer';
import NavbarE from './Components/Engineer/NavbarE';
import Dataengineer from './Page/Dataengineer';
import Datacompany from './Page/Datacompany';
import MainArea from './MainArea';
import Detailcard from './Page/Detailcard';
import Logout from './Page/Logout'
import Form from './Page/From';
import Edit from './Page/Editform'
import Editform from './Page/Editform';
import Cardcom from './Components/Company/Cardcom'
import Project from './Components/Company/Project';
import ProfilEng from './Components/Company/ProfilEng';
import Projectt from './Components/Engineer/Project';
import EditCompany from './Components/Company/EditCompany';
import Listproject from './Components/Company/Listproject';
import Hire from './Components/Company/Hire';
import Myprofil from './Components/Engineer/Myprofil';
import Hireproject from './Components/Company/Hireproject';






class App extends Component {
  render() {
    return (
       <Router>
        <div>
          {/* <MainArea/> */}
      
       <Route exact path='/' component={Home}/>
       <Route path='/login' component={Login}/>
      
       <Route path='/register' component={Register}/>
       <Route path='/card' component={Cards}/>
       <Route exact path='/engineer' component={HomeE}/>
       <Route path='/editengineer/:id' component={EditEngineer}/>
       <Route path='/editcompany/:id' component={EditCompany}/>
       {/* <Route path='/engineer/' component={NavbarE}/> */}
       <Route exact path='/company' component={HomeC}/>
       <Route path='/profilcompany/:id' component={ProfilCompany}/>
       <Route path='/dataengineer' component={Dataengineer}/>
       <Route path='/datacompany' component={Datacompany}/>
       
       <Route path='/detailcard/:engineerid' component={Detailcard}/>
       <Route path='/logout' component={Logout}/>
       <Route path='/form' component={Form}/>
       <Route path='/edit' component={Editform}/>
       <Route path='/profilengineer/:id' component={ProfilEngineer}/>
       <Route path='/navbare' component={NavbarE}/>
       <Route path='/homee' component={HomeE}/>
       <Route path='/cardcom' component={Cardcom}/>
       <Route path='/project' component={Project}/>
       <Route path='/profileng/:id' component={ProfilEng}/>
       <Route path='/projectt' component={Projectt}/>
       <Route path='/listproject' component={Listproject}/>
       <Route path='/hire/:id' component={Hire}/>
       <Route path='/myprofil' component={Myprofil}/>
       <Route path='/hireproject/:id' component={Hireproject}/>
       
       
       {/* <Route exact path={'/dataengineer/1'} >
          <Form select = {'1'} /> </Route> */}


       
       
       

        </div>
        </Router>  
      
    );
  }
}

export default App;
