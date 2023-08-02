import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {


  return (
    <>
      <div className='bgImageTrue'>
        <div className="container mt-5">
          <div className="d-flex justify-content-center ">
            <h1 className='text-dark'>Login Here</h1>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='d-flex justify-content-center p-3'>
            <Form className='mt-4'>
              <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  />
              </Form.Group>
              <div className="grid gap-3">
                <div className="p-2 g-col-6">
                <Link className='btn btn-dark' to='/home'>Login</Link>
                </div>
                <div className="p-2 g-col-6">
                  <p><i className='text-danger'><b>If you don't login yet <br /> Click on the signup button <img src="https://cdn-icons-png.flaticon.com/128/21/21178.png" width="8%" /></b></i></p>
                  <Link className='btn btn-dark' to='/signup'>Signup</Link>
                </div>
              </div>
            </Form>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Login;