import React, {Component} from 'react'
import '../Components/Kartu.css'
import axios from 'axios'

export default class Kartu extends Component {
    constructor() {
        super();
        this.state = {
          items : [],
         
        };
        
      }
      componentDidMount(){
        axios.get(`http://localhost:5000/engineer`)
        .then(res => {
          console.log(res);
          this.setState({ items: res.data});
        });
      }
    render(){
        const {items} = this.state
        return(
            <div className="container">
                <div className="row">
                    
                    {items.map((item, index)=>
                    <div key={index}>

                         <div>
        <section className="container">
          <div className="page-header">
            <h1>Material cards demo<br />
              <small>See full features on <a href="https://github.com/marlenesco/material-cards" target="_blank">Github</a></small></h1>
          </div>
          <div className="row active-with-click">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Red">
                <h2>
                  <span>Christopher Walken</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    The Deer Hunter
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-christopher-walken.jpg" />
                  </div>
                  <div className="mc-description">
                    He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Pink">
                <h2>
                  <span>Sean Penn</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Mystic River
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="http://u.lorenzoferrara.net/marlenesco/material-card/thumb-sean-penn.jpg" />
                  </div>
                  <div className="mc-description">
                    He has won two Academy Awards, for his roles in the mystery drama Mystic River (2003) and the biopic Milk (2008). Penn began his acting career in television with a brief appearance in a 1974 episode of Little House on the Prairie ...
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div>
            
            
            
            
          </div>
        </section>
        <a href="https://github.com/marlenesco/material-cards" className="github-corner" aria-label="View source on Github" target="_blank"><svg width={80} height={80} viewBox="0 0 250 250" style={{fill: '#f44336', color: '#ECEFF1', position: 'absolute', top: 0, border: 0, right: 0}} aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm" /><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body" /></svg></a><style dangerouslySetInnerHTML={{__html: ".github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}" }} />
      </div>


                        </div>
                    )}
        
        
    
      </div>
            </div>
        );
    }
}