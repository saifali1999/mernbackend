import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {

     // State to control sidebar visibility
     const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
   <>
        <div className={`left_sidebar p-3 ${showOffcanvas ? 'show' : ''}`}>
                <div className="d-flex justify-content-between">
                    <h3 className='mb-3'>StartIP</h3>
                    {/* <i className="fa-solid fa-bars toggle_bar" onClick={toggleOffcanvas}></i> */}
                </div>
                    <ul className='p-0'>
                        <li className='nav-item'><Link to='/dashboard' className='nav-link'><i className="fa-solid fa-gauge me-2"></i>Dashboard</Link></li>
                        <hr />
                     <span className='small text-uppercase text-gray-500 '>pages</span>

                        <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span><i className="fa-solid fa-address-card me-2"></i> About</span>
                               <span> <i className="fa-solid fa-chevron-right"></i></span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/about-list">About List</Link></li>
                            </ul>
                        </li> <hr className='m-0' />
                        <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span><i className="fa-solid fa-blog me-2"></i> Blog</span>
                               <span> <i className="fa-solid fa-chevron-right"></i></span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/blog-list'>Blog List</Link></li>
                            </ul>
                        </li> <hr className='m-0' />
                        <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span><i className="fa-solid fa-users me-2"></i> Team</span>
                               <span> <i className="fa-solid fa-chevron-right"></i></span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/team-list'>Team List</Link></li>
                            </ul>
                        </li> <hr className='m-0' />
                        <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span><i className="fa-brands fa-creative-commons-nd me-2"></i> Our Works</span>
                               <span> <i className="fa-solid fa-chevron-right"></i></span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/work-list'>Work List</Link></li>
                            </ul>
                        </li> <hr className='m-0' />
                        {/* <li className="nav-item dropdown mt-3">
                            <Link className="nav-link dropdown-toggle d-flex justify-content-between" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               <span><i className="fa-solid fa-briefcase me-2"></i> Our Services</span>
                               <span> <i className="fa-solid fa-chevron-right"></i></span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/service-list'>Services List</Link></li>
                            </ul>
                        </li> <hr className='m-0' /> */}
                       
                    </ul>
                </div>
   </>
  )
}

export default Sidebar