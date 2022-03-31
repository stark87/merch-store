import React, { createContext } from "react";
import { useReducer, useEffect } from "react";
import { products } from "./productData";

import { reducer } from "./components/reducer";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,
        {
            products: products,
            cart: [],
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            option: null,
        },
        () => {
        const sessionData = sessionStorage.getItem('cart');
            return {
                products: products,
                cart: sessionData ? JSON.parse(sessionData) : [],
                cartSubTotal: 0,
                cartTax: 0,
                cartTotal: 0,
                option: null,
            }
    });
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart]);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {props.children}    
        </ProductContext.Provider>
    )
}
 
export default ProductContextProvider;