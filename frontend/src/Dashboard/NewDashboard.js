import React, { useState } from 'react';
import './newdash.css';
import Sidebar from './Sidebar';
import DashNav from './DashNav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NewDashboard = () => {
   

    return (
        <>
            <div className="main_wrapper">
                <Sidebar />
              
                <div className="main_content">
                   <DashNav />
                  
                </div>
            </div>
        </>
    );
}

export default NewDashboard;

  {/* <div className="col-md-6 col-lg-6 col-11 mx-auto bg-white p-3 p-md-4 mt-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div> */}