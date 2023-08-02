import React from 'react'
import 'animate.css';
export default function HeaderSec() {
  return (
    <>

        <div className='headerSec  d-flex justify-content-center align-items-between'>
          <div className='animate__animated animate__bounceInLeft container'>
            <img className='img-fluid' src="https://static.vecteezy.com/system/resources/previews/005/638/074/original/illustration-isometric-concept-safety-of-online-shopping-in-e-commerce-stores-free-vector.jpg" alt="" />
          </div>
          <div className='container animate__animated animate__bounceInRight d-flex align-items-center'>
            <div className="headerSection">
              <h2>
                The Best Online Mart
              </h2>
              <p className='headerp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro esse, totam maxime expedita quibusdam non eveniet est autem tempora deleniti assumenda molestias laborum quisquam ad dolorum dolore aliquid repellat?</p>
            </div>
          </div>
        </div>


    </>
  )
}
