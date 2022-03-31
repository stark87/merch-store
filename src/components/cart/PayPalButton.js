import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { sendEmail } from '../../email';

export default class PayPalButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.clearCart();
            this.props.navigate('/');
            sendEmail(this.props.data.value, this.props.data.name, this.props.data.email);
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'USD';
        
        const client = {
            sandbox: "AXgfw1HGXZlb51DXesC55Lyf1V3ngqNgiEUZf2bI5moWvYYHyLoOT6cKFw91rdoquhH1PGwV9x7GAGQX",
            // process.env.REACT_APP_APP_ID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }   
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}