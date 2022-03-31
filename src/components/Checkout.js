import { ProductContext } from "../context";
import PayPalButton from './cart/PayPalButton';
import { useContext, useState } from "react";
import { sendEmail } from '../email';

const Checkout = (history) => {
    const { dispatch } = useContext(ProductContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bool, setBool] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (bool === false) {
            setBool(!bool);
        }
    }

    return (
        <ProductContext.Consumer>
            {value => {
                return (
                    <div className="container-fluid">
                        <div className="row" style={{height: "100vh"}}>
                            <div className="col-12 col-lg-7 d-flex justify-content-center">
                                <div className="col-10">
                                    <div className="row" style={{ height: "20vh" }}></div>
                                    <h1>User's Details</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" placeholder="name" 
                                                onChange={(e) => setName(e.target.value)} required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" placeholder="email"
                                                onChange={(e) => setEmail(e.target.value)} required/>
                                        </div>
                                        <button type="submit" className="btn btn-dark">Submit</button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-12 col-lg-5 border-start border-top" style={{background: "#fafafa"}}>
                                <div className="row d-none d-lg-flex" style={{ height: "20vh" }}></div>
                                <div className="row d-lg-none m-0 py-3">
                                    <div className="col-6 d-flex-column justify-content-center">
                                        <p className='m-0 text-center fw-bold'>SUBTOTAL</p>
                                        <p className='m-0 text-center fw-bold'>TAX</p>
                                        <p className='m-0 text-center fw-bold'>TOTAL</p>
                                    </div>
                                    <div className="col-6 d-flex-column justify-content-center">
                                        <p className='m-0 text-center fw-bold'>${value.state.cartSubTotal}</p>
                                        <p className='m-0 text-center fw-bold'>${value.state.cartTax}</p>
                                        <p className='m-0 text-center fw-bold'>${value.state.cartTotal}</p>
                                    </div>
                                    <PayPalButton total={value.state.cartTotal} clearCart={() => dispatch({ type: 'CLEAR_CART' })} history={history}>

                                    </PayPalButton>
                                </div>
                                <div className="row d-none d-lg-flex m-0 py-3">
                                    <div className="col">
                                        <p className='m-0 text-end fw-bold'>SUBTOTAL</p>
                                        <p className='m-0 text-end fw-bold'>TAX</p>
                                        <p className='m-0 text-end fw-bold'>TOTAL</p>
                                    </div>
                                    <div className="col">
                                        <p className='m-0 text-end fw-bold'>${value.state.cartSubTotal}</p>
                                        <p className='m-0 text-end fw-bold'>${value.state.cartTax}</p>
                                        <p className='m-0 text-end fw-bold'>${value.state.cartTotal}</p>

                                        <PayPalButton total={value.state.cartTotal} clearCart={() => dispatch({ type: 'CLEAR_CART' })} history={history}>

                                        </PayPalButton>
                                        <button onClick={() => {
                                            if(bool){
                                                sendEmail(value.state, name, email)
                                            }
                                        }}>Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductContext.Consumer>
    );
}
 
export default Checkout;