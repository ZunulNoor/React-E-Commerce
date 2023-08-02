import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'

const initialData = {
    cart : []
}

export const CartContext = createContext("Initial Value")

export default function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialData)

    return (

        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>


    )

}
