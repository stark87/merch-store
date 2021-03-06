import React from 'react';

const MyEmail = ({data}) => {
    return (
        <div style={{ width: '80%', background: "#F3F3F3", margin: "auto" }}>
            <table role="presentation" style={{ width: '70%', borderCollapse: 'collapse', border: 0, borderSpacing: 0, margin: "auto"}}>
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
                        <td style={{ width: '15%', marginRight: 0, paddingBottom: "24px", paddingTop: "24px" }}>
                            <img src={"https://merch-store.netlify.app/" + cartItem.img[0]} width="100px" alt="" />
                        </td>
                        <td style={{ width: '35%' }}>
                            {cartItem.title}
                            <p>{cartItem.option? cartItem.option.toUpperCase(): null}</p>
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
