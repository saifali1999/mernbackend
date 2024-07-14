import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import "./user.css"

const Login = () => {
  return (
    <>

      <div className='login_page'>

        <Navbar />

        <div className='container3'>
          <div className='header'>
            <div className='box'>
              <h2>Login</h2>
            </div>
          </div>

        </div>
      </div>


      <div className='container6'>

        <div className='single-form '>

          <div className='form-details'>
            <img src="images/brandlogo.png" alt="logo"></img>
            <p>
              Don't have an account yet?
              <a href='' className='m-2'>Sign Up</a>
            </p>

          </div>

          <form>
            <div className='headings mb-3'>
              <label className='form-label'>Email</label>
              <input type='email' className='form-control'></input>
            </div>

            <div className='headings mb-3'>
              <label className='form-label'>Password</label>
              <input type='password' className='form-control'></input>
            </div>

            <div className='mb-3'>
              <p>
                <a href=''>Forgot Password</a>
              </p>
            </div>

            <button type='submit' className='btn btn-primary'>LOGIN</button>
          </form>

          <div className='foot '>
            <p>or connect with</p>
            <ul className='social-items2'>
              <a href='https://www.mail.com/'><i className="fa-regular fa-envelope  me-3"></i></a>
              <a href='https://www.facebook.com/'><i className="fa-brands fa-facebook-f me-3"></i></a>
              <a href='https://www.twitter.com/'><i className="fa-brands fa-twitter me-3"></i></a>
            </ul>
          </div>
        </div>
      </div>


      <Footer />





    </>
  )
}

export default Login
