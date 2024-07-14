import {React, useState} from 'react'
import { Link } from 'react-router-dom'; 

const DashNav = () => {

       // State to control sidebar visibility
       const [showOffcanvas, setShowOffcanvas] = useState(false);

     // Function to toggle off-canvas visibility
     const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };
  return (
    <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
                        <div className="container-fluid">
                            {/* <Link className="navbar-brand" href="#">Navbar</Link> */}
                            <form className=" form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                            <ul className="navbar-nav ms-auto  mb-lg-0">
                                <li className="nav-item dropdown message_icon">
                                <Link className="text-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <div className='position-relative'>
                                      <i className="fa-solid fa-envelope"></i>
                                      <span className="msg_count">2</span>
                                   </div>
                                </Link>
                                <ul className="dropdown-menu shadow">
                                    <h6 className='text-uppercase m-0'>Alert center</h6>
                                    <li><Link className="dropdown-item" href="#">
                                        <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="small text-dark font-weight-bold text-wrap">A new monthly report is ready to download!</span>
                                    </div>
                                    </Link></li>
                                    <hr className='m-0' />
                                    <li><Link className="dropdown-item" href="#">
                                        <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="small text-dark font-weight-bold text-wrap">A new monthly report is ready to download!</span>
                                    </div>
                                    </Link></li>
                                    <hr className='m-0' />
                                    <li><Link className="dropdown-item small text-gray-500 " href="#">Show All Alerts</Link></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown  border-start">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img style={{width:"35px",height:"35px", borderRadius:"50%"}} src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?w=740&t=st=1720673647~exp=1720674247~hmac=69e420047e4949545591e49ec601213f603387d9938bcc2a4257d11e75133ce2" alt="" />
                                </Link>
                                <ul className="dropdown-menu shadow">
                                    <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                    <li><Link className="dropdown-item" href="#">Settings</Link></li>
                                    <hr className='m-0' />
                                    <li><Link className="dropdown-item" href="#">Logout</Link></li>
                                </ul>
                                </li>
                            </ul>
                            <i className="fa-solid fa-bars toggle_bar" onClick={toggleOffcanvas}></i>

                        </div>
                    </nav>
    </>
  )
}

export default DashNav