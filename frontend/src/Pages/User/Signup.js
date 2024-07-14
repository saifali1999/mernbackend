import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import "./user.css"

const Signup = () => {
  return (
    <div>

      <div className='signup_page'>

        <Navbar />


        <div className='container3'>
          <div className='header'>
            <div className='box'>
              <h2>Sign Up</h2>
            </div>
          </div>


        </div>


        <div className='container6'>

          <div className='single-form '>

            <div className='form-details'>
              <img src="images/brandlogo.png" alt="logo"></img>
              <p>
                Create a new account
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

              <div className='headings mb-3'>
                <label className='form-label'>Confirm Password</label>
                <input type='password' className='form-control'></input>
              </div>

             

              <button type='submit' className='btn btn-primary'>SIGN UP</button>
            </form>

            <div className='foot'>
             <p>Already have an account yet?
              <a href='' className='m-2'>Login</a>
             </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Signup
