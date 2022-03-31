import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return <div className='col-10 mx-auto col-md-7 mx-md-0 pe-md-5 col-lg-4 px-lg-5 my-3'>
            <ProductContext.Consumer>
                {value => {
                    return (
                        <div className='d-flex flex-column h-100 pe-md-3 pb-md-4'>
                            <div className="mt-auto px-lg-4">
                                <Link to={"/details/" + id}>
                                    <img src={img[0]} alt="product" className='img-fluid'/>
                                </Link>
                            </div>
                            <div className="mt-auto pt-3">
                                <p className="text-center card-text">{title} —&nbsp;
                                    <strong>
                                        ${price}
                                        {Number.isInteger(price) ? ".00" : null}
                                    </strong>
                                </p>
                            </div>
                        </div>
                    )
                }}
            </ProductContext.Consumer>
        </div>;
    }
}
 
export default Product;