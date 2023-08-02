import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImgSec from '../Components/ImgSec'
import {CartContext} from '../Context/addtocart/context'
export default function ProductPage() {


    const {state,dispatch} = useContext(CartContext)

    const { productID } = useParams()

    const [product, setproduct] = useState({})

    const [review, setReview] = useState("")

    const [ratingstar, setRatingstar] = useState(0)

    const [productQuantity, setproductQuantity] = useState(1)

    const addtocart = (item) => {
        dispatch({
            type : "ADD_TO_CART",
            payload : item
        })
        const payload = {
            ...product,
            productQuantity,
            total: product.price * productQuantity
        }
        console.log(payload)
        Swal.fire({
            title: 'SuccessFully!',
            text: 'Added to Cart',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)

        Swal.fire({
            title: 'SuccessFullySubmitted!',
            text: '',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            setRatingstar(0)
            setReview('')
        })
    }

    const ratingChanged = (newRating) => {
        setRatingstar(newRating)
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))
    }, [])
    return (
        <>
            <div className="container">
                <div className="text-center">
                    <h1>{product.title}</h1>
                    <p className="text-secondary">{product.description}</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'}
                            edit={false}
                            value={product.rating}
                        />
                    </div>
                    <div className="my-3">
                        <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}> - </button>
                        {productQuantity}
                        <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}> +</button>
                    </div>
                    <button className="btn btn-dark" onClick={() => addtocart(product)}>Add to Cart</button>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {
                            product?.images?.length > 0 && <ImgSec images={product.images} />
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="conatiner">
                            <div className="text-center mb-5">
                                <h2>Comments : </h2>
                            </div>
                            <div>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: 100 }}
                                        defaultValue={review}
                                        onChange={(e) => setReview(e.target.value)}
                                    />
                                    <label htmlFor="floatingTextarea2">Review</label>
                                </div>

                                <div className='d-flex align-items-center'>
                                    <h5>Rate us : </h5>
                                    <ReactStars
                                        count={5}
                                        value={ratingstar}
                                        size={24}
                                        color2={'#ffd700'}
                                        onChange={ratingChanged}
                                    />
                                    <span className='ms-3'>({ratingstar})</span>
                                </div>
                                <button className='btn btn-dark my-3' onClick={submitReview}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
