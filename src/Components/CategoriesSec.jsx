import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, json } from 'react-router-dom';

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))
  }, [])
  return (
    <>
      <div className='container'>
        <div className='my-5 text-center animate__animated  animate__bounceInRight'>
          <h1>Products</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="row animate__animated animate__fadeInUp">
          {
            categories.map((val, key) =>
              <div className="col-md-4 my-3" key={key}>
                  <Link className='text-decoration-none' to={`/products/category/${val}`}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{key + 1} - {val.toUpperCase()}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
