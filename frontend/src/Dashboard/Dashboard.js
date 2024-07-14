import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
     
      <div id="dashboard" className=" mt-5 pt-5">
        <div className="container">
            <h2 className="text-center">Dashboard</h2>
            <div className="row mt-5">
                <div className="col-md-5 mx-auto bg-light p-3 p-md-5">
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
                </div>
            </div>
        </div>
      </div>

      
      
    </>
  );
};

export default Dashboard;
