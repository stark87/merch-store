import React from 'react'
import styled from 'styled-components';
import { useContext } from "react";
import { ProductContext } from '../../context';


const CartItem = (props) => {
    const { dispatch } = useContext(ProductContext);
    const { title, img, price, uid, option, count, total } = props.item;
    return (
        <div>
            <div className="row d-none d-lg-flex m-0 py-4">
                <div className="col"></div>
                <div className="col-2">
                    <img src={img[0]} alt="product" className='img-fluid' />
                </div>
                <div className="col-4 my-auto">
                    <h5 className='fw-bold fst-italic'>{title}</h5>
                    {option? <CustomButton className='text-capitalize'>{option}</CustomButton>: null}
                    <br />
                    <CustomButton onClick={() => dispatch({ type: 'REMOVE_ITEM', uid: uid })}>Remove</CustomButton>
                </div>
                <div className="col-2 my-auto">
                    <input className='py-2' type="number" id="quantity" min="1" max="10" defaultValue={count} onChange={(e) => dispatch({type: 'CREMENT', uid: uid, value: e.target.value})}/>
                </div>
                <div className="col-2 d-flex justify-content-end my-auto">
                    ${total}
                    {Number.isInteger(price) ? ".00" : null}
                </div>
                <div className="col"></div>

            </div>

            <div className="d-lg-none m-0 py-4">
                <div className="row m-0">
                    <div className="col"></div>
                    <div className="col-3">
                        <img src={img[0]} alt="product" className='img-fluid' />
                    </div>
                    <div className="col"></div>
                    <div className="col-6 my-auto">
                        <h5 className='fw-bold fst-italic'>{title}</h5>
                        <CustomButton className='text-uppercase'>{option}</CustomButton>
                        <br />
                        <CustomButton onClick={() => dispatch({ type: 'REMOVE_CART', uid: uid })}>Remove</CustomButton>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="row py-2 m-0">
                    <div className="col"></div>
                    <div className="col-3 d-flex justify-content-center my-auto">
                        <input className='py-2' type="number" id="quantity" min="1" max="10" defaultValue={count} onChange={(e) => dispatch({ type: 'CREMENT', uid: uid, value: e.target.value })} />
                    </div>
                    <div className="col"></div>
                    <div className="col-7 d-flex justify-content-end px-5 my-auto">
                        ${total}
                        {Number.isInteger(price) ? ".00" : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

const CustomButton = styled.button`
background: none;
border: none;
padding: 0 0;
margin: 0;
transition: 0.6s cubic-bezier(0, 0, 0.2, 1);
&:hover{
    color: red;
}
`

export default CartItem;
