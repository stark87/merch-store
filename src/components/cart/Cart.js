import React from 'react'
import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context';
import CustomButton from '../CustomButton';
import CartItem from './CartItem';

const Cart = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        dispatch({ type: 'SUM_TOTAL' })
        // return () => {
        //     cleanup
        // }    
    }, [state.cart])

    return (
        <ProductContext.Consumer>
            {value => {
                return (
                    <div>
                        <h1 className='text-center py-3'>YOUR CART</h1>

                        {value.state.cart.length === 0 ?  
                        <div className='row m-0'>
                            <h5 className='text-center'>Your cart is currently empty</h5>
                        </div>
                        : 
                        <div>
                            <div className="row d-none d-lg-flex m-0 py-3">
                                <div className="col"></div>
                                <div className="col-2"></div>
                                <div className="col-4"></div>
                                <div className="col-2">
                                    <p>QUANTITY</p>
                                </div>
                                <div className="col-2 d-flex justify-content-end">
                                    <p>TOTAL</p>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row m-0">
                                <div className="col p-0">
                                    {value.state.cart.map(cartItem => {
                                        return <CartItem key={cartItem.uid} item={cartItem} />
                                    })}
                                </div>
                            </div>

                            <div className="row d-lg-none m-0 py-3">
                                <div className="col-6 d-flex-column justify-content-center">
                                    <p className='m-0 text-end fw-bold'>SUBTOTAL</p>
                                </div>
                                <div className="col-6 d-flex-column justify-content-center">
                                        <p className='m-0 text-end fw-bold'>${value.state.cartSubTotal}</p>
                                </div>
                            </div>
                            <div className="row d-none d-lg-flex m-0 py-3">
                                <div className="col"></div>
                                <div className="col-2"></div>
                                <div className="col-4"></div>
                                <div className="col-2">
                                    <p className='m-0 text-end fw-bold'>SUBTOTAL</p>
                                </div>
                                <div className="col-2">
                                    <p className='m-0 text-end fw-bold'>${value.state.cartSubTotal}</p>
                                </div>
                                <div className="col"></div>
                            </div>

                            <div className="row d-lg-none m-0">
                                <div className="col">
                                        <span className='d-flex justify-content-end'>
                                            <p>Taxes and shipping will be calculated at checkout</p>
                                        </span>
                                    <span className='d-flex justify-content-end pt-3'>
                                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                                            <CustomButton className='m-0 px-3' style={{ background: "black", color: "white" }}>CHECKOUT &nbsp;&rarr;</CustomButton>
                                        </Link>
                                    </span>
                                        {value.state.cart.length === 0 ? null :
                                            <span className='d-flex justify-content-end pt-4'><CustomButton className='m-0' style={{ background: "black", color: "white" }} onClick={() => dispatch({ type: 'CLEAR_CART' })}>CLEAR CART</CustomButton></span>
                                        }
                                </div>
                            </div>
                            <div className="row d-none d-lg-flex m-0">
                                <div className="col"></div>
                                <div className="col-10">
                                        <span className='d-flex justify-content-end'>
                                            <p>Taxes and shipping will be calculated at checkout</p>
                                        </span>
                                    <span className='d-flex justify-content-end'>
                                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                                            <CustomButton className='m-0 px-3' style={{ background: "black", color: "white" }}>CHECKOUT &nbsp;&rarr;</CustomButton>
                                        </Link>
                                    </span>
                                    {value.state.cart.length === 0 ? null :
                                        <span className='d-flex justify-content-end pt-5'><CustomButton className='m-0' style={{ background: "black", color: "white" }} onClick={() => dispatch({ type: 'CLEAR_CART' })}>CLEAR CART</CustomButton></span>
                                    }
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>}
                        <br />
                        <br />
                        <br />
                        
                        <Link to='/' style={{ textDecoration: 'none'}}>
                            <span className='d-flex justify-content-center py-3 pb-5'><CustomButton style={{ background: "black", color: "white" }}>CONTINUE SHOPPING</CustomButton></span>
                        </Link>
                    </div>
                );
            }}
        </ProductContext.Consumer>
    )
}
 
export default Cart;