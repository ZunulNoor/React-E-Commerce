import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <div className='bgImageFalse'>
        <div className="mt-5">
          <div className="d-flex justify-content-center ">
            <h1 className='text-secondary-emphasis'>SignUp</h1>
          </div>
        </div>
        <div className='mt-5'>
          <div className='d-flex justify-content-around p-3'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" required />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Last Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={()=> dispa} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me!" />
              </Form.Group>
              <Link className='btn btn-dark' to='/login'>Signup</Link>
            </Form>
            <img src="https://static-00.iconduck.com/assets.00/checklist-icon-394x512-lsteni5u.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
