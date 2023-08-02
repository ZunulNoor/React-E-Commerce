import React, { useContext, useState } from 'react'
import { FaOpencart } from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { CartContext } from '../Context/addtocart/context'
import CartItems from './CartItems'
export default function Cart() {

    const [show, setShow] = useState(false)

    const {state,dispatch} = useContext(CartContext)

    return (
        <>
            <button type='button' onClick={() => setShow(true)} className='btn btn-dark position-relative'>
                <FaOpencart />
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success'>
                    {state.cart.length}
                </span>
            </button>
            <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        state.cart.map((val,key)=> <CartItems key={key} data={val}/> )
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
