import React, { Component } from 'react'
import NavbarC from './NavbarC'
import './ProfilCompany.css'
import axios from 'axios'



export default class ProfilCompany extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr_engineer: '',
    }
  }
 
  componentDidMount(){
    var idEng = this.props.match.params.id
    console.log(idEng);
    
    var token = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = token;
    fetch('http://35.170.248.238:7000/company/by/'+idEng  )
    .then(response => response.json())
    .then(data => this.setState({ arr_engineer: data[0] })      )
    let login = localStorage.getItem('Login');
    // console.log('data:'+data);
    console.log(this.state.arr_engineer);
    
    
    if(login == 0){
        this.setState({
            isLogin: '0'
        });
    }
}
  render() {
    return (
      <div className="styles">
        <NavbarC />
        <section id="prof">
          <div className="container">
            <div id="user-profile-2" className="user-profile">
              <div className="tabbable">
                <ul className="nav nav-tabs padding-18">
                  <li className="active">
                    <a data-toggle="tab" href="#home">
                      <i className="green ace-icon fa fa-user bigger-120" />
                      Profile</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#feed">
                      <i className="orange ace-icon fa fa-rss bigger-120" />
                      Activity Feed</a>
                  </li>

                </ul>
                <div className="tab-content no-border padding-24">
                  <div id="home" className="tab-pane in active">
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 center">
                        <span className="profile-picture">
                          <img className="editable img-responsive" alt=" Avatar" id="avatar2" width="250" height="250" src={`http://35.170.248.238:7000/myhire/file/` + this.state.arr_engineer.logo} />
                        </span>

                      </div>{/* /.col */}
                      <div className="col-xs-12 col-sm-9">
                        <h4 className="blue">
                          <span className="middle">Biodata Company</span>
                          <span className="label label-purple arrowed-in-right">

                          </span>
                        </h4>
                        <div className="profile-user-info">
                          <div className="profile-info-row">
                            <div className="profile-info-name">Name Company</div>
                            <div className="profile-info-value">
                            <span>{this.state.arr_engineer.name}</span> 
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name">Email</div>
                            <div className="profile-info-value">
                            <span>{this.state.arr_engineer.email}</span> 
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name">Phone Number</div>
                            <div className="profile-info-value">
                            <span>{this.state.arr_engineer.phone_number}</span> 
                            </div>
                          </div>
                          <div className="profile-info-row">
                          <div className="profile-info-name"> Location </div>
                          <div className="profile-info-value">
                            <i className="fa fa-map-marker light-orange bigger-110" />
                            <span>{this.state.arr_engineer.location}</span>
                          </div>
                        </div>
                        <div className="profile-info-row">
                          <div className="profile-info-name"> Required Skill </div>
                          <div className="profile-info-value">
                            <span>{this.state.arr_engineer.required_skill}</span>
                          </div>
                        </div>
                        <div className="profile-info-row">
                          <div className="profile-info-name"> Description </div>
                          <div className="profile-info-value">
                            <span>{this.state.arr_engineer.description}</span>
                          </div>
                        </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name"> Joined </div>
                            <div className="profile-info-value">
                              <span>{this.state.arr_engineer.date_created}</span>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name"> Last Online </div>
                            <div className="profile-info-value">
                              <span>3 hours ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="hr hr-8 dotted" />
                        <div className="profile-user-info">
                          <div className="profile-info-row">
                            <div className="profile-info-name"> Website </div>
                            <div className="profile-info-value">
                              <a href="#" target="_blank">www.alexdoe.com</a>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name">
                              <i className="middle ace-icon fa fa-facebook-square bigger-150 blue" />
                            </div>
                            <div className="profile-info-value">
                              <a href="#">Find me on Facebook</a>
                            </div>
                          </div>
                          <div className="profile-info-row">
                            <div className="profile-info-name">
                              <i className="middle ace-icon fa fa-twitter-square bigger-150 light-blue" />
                            </div>
                            <div className="profile-info-value">
                              <a href="#">Follow me on Twitter</a>
                            </div>
                          </div>
                        </div>
                      </div>{/* /.col */}
                    </div>{/* /.row */}
                    <div className="center">  <br></br><br></br>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit Profil</button>
                    </div>
                    <div className="space-20" />
                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="widget-box transparent">
                          <div className="widget-header widget-header-small">
                            <h4 className="widget-title smaller">
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{/* /#home */}
                  <div id="feed" className="tab-pane">
                    <div className="profile-feed row">
                      <div className="col-sm-6">
                        <div className="profile-activity clearfix">
                          <div>
                            <img className="pull-left" alt="Alex Doe's avatar" src="http://bootdey.com/img/Content/avatar/avatar1.png" />
                            <a className="user" href="#"> Alex Doe </a>
                            changed his profile photo.
                      <a href="#">Take a look</a>
                            <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              an hour ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <img className="pull-left" alt="Susan Smith's avatar" src="http://bootdey.com/img/Content/avatar/avatar2.png" />
                            <a className="user" href="#"> Susan Smith </a>
                            is now friends with Alex Doe.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              2 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-check btn-success no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            joined
                      <a href="#">Country Music</a>
                            group.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              5 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-picture-o btn-info no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            uploaded a new photo.
                      <a href="#">Take a look</a>
                            <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              5 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <img className="pull-left" alt="David Palms's avatar" src="http://bootdey.com/img/Content/avatar/avatar3.png" />
                            <a className="user" href="#"> David Palms </a>
                            left a comment on Alex's wall.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              8 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                      </div>{/* /.col */}
                      <div className="col-sm-6">
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-pencil-square-o btn-pink no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            published a new blog post.
                      <a href="#">Read now</a>
                            <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              11 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <img className="pull-left" alt="Alex Doe's avatar" src="http://bootdey.com/img/Content/avatar/avatar4.png" />
                            <a className="user" href="#"> Alex Doe </a>
                            upgraded his skills.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              12 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-key btn-info no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            logged in.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              12 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-power-off btn-inverse no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            logged out.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              16 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                        <div className="profile-activity clearfix">
                          <div>
                            <i className="pull-left thumbicon fa fa-key btn-info no-hover" />
                            <a className="user" href="#"> Alex Doe </a>
                            logged in.
                      <div className="time">
                              <i className="ace-icon fa fa-clock-o bigger-110" />
                              16 hours ago
                      </div>
                          </div>
                          <div className="tools action-buttons">
                            <a href="#" className="blue">
                              <i className="ace-icon fa fa-pencil bigger-125" />
                            </a>
                            <a href="#" className="red">
                              <i className="ace-icon fa fa-times bigger-125" />
                            </a>
                          </div>
                        </div>
                      </div>{/* /.col */}
                    </div>{/* /.row */}
                    <div className="space-12" />
                    <div className="center">
                      <button type="button" className="btn btn-sm btn-primary btn-white btn-round">
                        <i className="ace-icon fa fa-rss bigger-150 middle orange2" />
                        <span className="bigger-110">View more activities</span>
                        <i className="icon-on-right ace-icon fa fa-arrow-right" />
                      </button>
                    </div>
                  </div>{/* /#feed */}


                </div>
              </div>
            </div>


          </div>
        </section>




        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Profil</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <form className="form" onSubmit={this.handlerSubmit} action="##" method="post" id="registrationForm">
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="first_name"><h6>Full Name</h6></label>
                      <input type="text" className="form-control" name="name" id="first_name" onChange={this.handlerChange} placeholder="enter your full name" title="enter your full name if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="last_name"><h6>Email</h6></label>
                      <input type="text" className="form-control" name="email" id="last_name" onChange={this.handlerChange} placeholder="enter your description" title="enter your description if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="phone"><h6>Phone Number</h6></label>
                      <input type="text" className="form-control" name="phone_number" id="phone" onChange={this.handlerChange} placeholder="enter your skill" title="enter your skill if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="phone"><h6>Location</h6></label>
                      <input type="text" className="form-control" name="location" id="phone" onChange={this.handlerChange} placeholder="enter your skill" title="enter your skill if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="mobile"><h6>Skill Reuired</h6></label>
                      <input type="text" className="form-control" name="required_skill" id="mobile" onChange={this.handlerChange} placeholder="clik your date of birdr" title="clik your date of bird if any." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="email"><h6>Description</h6></label>
                      <input type="text" className="form-control" name="description" id="email" onChange={this.handlerChange} placeholder="www.github.com" title="enter your showcase." />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-4">
                      <label htmlFor="email"><h6>Logo</h6></label>
                      <input type="file" className="form-control" name="logo" id="email" onChange={this.handlerChange} placeholder="www.github.com" title="enter your showcase." />
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                  </div>

                </form>


              </div>

            </div>
          </div>
        </div>

      </div>


    );
  }
}