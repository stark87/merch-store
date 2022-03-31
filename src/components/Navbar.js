import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ProductContext } from '../context'
import Footer from "./Footer";



const Navbar = () => {

    return (
        <ProductContext.Consumer>
            {(value) => {
                return (
                    <div>
                        <Nav className="navbar px-4 p-md-4">
                            <Link to="/">
                                <img src="https://cdn.shopify.com/s/files/1/1494/5022/files/joyner_signature_logo_white_150x.png?v=1597775198" alt="" className='navbar-brand ps-5 py-3' />
                            </Link>
                            <Link to="/Cart">
                                <span style={{ color: "black" }}><i className="fas fa-shopping-cart" /></span>
                                {(value.state.cart.length === 0) ?
                                    null : (<span style={{ color: "black", fontSize: "10px" }}><i className="fas fa-circle" style={{ position: "relative", bottom: "10px" }} /></span>)
                                }
                            </Link>
                        </Nav>

                        <Outlet />
                        <Footer />
                    </div>
                )
            }}
        </ProductContext.Consumer>
    )
}

const Nav = styled.nav`
    background: var(--mainGrey);
`

export default Navbar