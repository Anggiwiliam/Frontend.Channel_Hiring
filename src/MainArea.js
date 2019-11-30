import React, { Component} from 'react'


export default class MainArea extends Component {
    constructor() {
        super();
       
    }
    render() {
        return( 
            <div>
               <section id="team">
        <div className="container my-3 py-5 text center">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body">
                  <img src="img" alt="" className="img-fluid rounded-circle w-50 mb-3 " />
                  <h3>anggi</h3>
                  <h5>sdsadsdas</h5>
                  <p>ffdsfdsfdssd </p>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="p-4">
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                    <div className="p-4">
                      <a href>
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                           
            </div>
        );
    }
}
