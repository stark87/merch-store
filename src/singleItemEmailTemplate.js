import React from 'react';
import { Email, Item, Image, Span, A, Box } from 'react-html-email';

const MyEmail = ({ data }) => {
    return (
        <div style={{ width: '80%', background: "#F3F3F3", margin: "auto" }}>
            <table role="presentation" style={{ width: '70%', borderCollapse: 'collapse', border: 0, borderSpacing: 0, margin: "auto" }}>
                <tr style={{ height: '48px' }}></tr>
                <tr>
                    <td style={{ width: '20%' }}></td>
                    <td style={{ width: '20%' }}><b>Item</b></td>
                    <td style={{ width: '20%' }}><b>Quantity</b></td>
                    <td style={{ width: '20%' }}><b>Total</b></td>
                </tr>
                <tr style={{ height: '30px' }}></tr>

                {data.cart.map(cartItem => {
                    return <tr key={cartItem.uid} style={{ borderBottom: "1px solid black" }}>
                        <td style={{ width: '15%', marginRight: 0, paddingBottom: "48px" }}>
                            <img src="https://cdn.shopify.com/s/files/1/1494/5022/products/ADHD_BlackT-Shirt_100Bands_720x_b9078137-f08d-4952-8803-5ee58ccd7b35_900x.png?v=1586367621" width="100px" alt="" />
                        </td>
                        <td style={{ width: '35%' }}>
                            {cartItem.title}
                            <p>{cartItem.option.toUpperCase()}</p>
                        </td>
                        <td style={{ width: '15%' }}>{cartItem.count}</td>
                        <td style={{ width: '15%' }}><b>
                            ${cartItem.total}
                            {Number.isInteger(cartItem.total) ? ".00" : null}
                        </b></td>
                    </tr>
                })}

                <tr style={{}}>
                    <td style={{ width: '20%' }}></td>
                    <td style={{ width: '20%' }}></td>
                    <td style={{ width: '20%' }}></td>
                    <td style={{ width: '20%' }}>
                        <p><b>SubTotal: ${data.cartSubTotal}</b></p>
                        <p><b>Tax: ${data.cartTax}</b></p>
                        <p><b>Grand Total: ${data.cartTotal}</b></p>
                    </td>
                </tr>

                <tr style={{ height: '48px' }}></tr>
            </table>
        </div>
    )
};

export default MyEmail;