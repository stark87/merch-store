import React, { Component } from 'react'
import { ProductContext } from '../context';
import Product from './Product';

class Home extends Component {
    render() { 
        return <div className='container-fluid'>
        <div className="row py-5">
                <h2 className='text-center fw-bold'>PRODUCTS</h2>
        </div>
            <div className="row">
                    <ProductContext.Consumer>{value => {
                        return value.state.products.map(product => {
                            return <Product key={product.id} product={product} />
                        })
                    }}</ProductContext.Consumer>
            </div>
        </div>;
    }
}
 
export default Home;