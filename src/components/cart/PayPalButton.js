import { useState } from "react";
import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { sendEmail } from '../../email';
import ModalComponent from '../Modal';
import SuccessModal from '../SuccessModal';

export const PayPalButton = (props)  => {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const showSuccessModal = () => {
        setIsSuccessOpen(true);

    };

    const hideSuccessModal = () => {
        setIsSuccessOpen(false);
        props.clearCart();
        props.navigate('/');
    };

    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
        sendEmail(props.data.value, props.data.name, props.data.email)
            .then((res) => {
                if (res = 200) {
                    showSuccessModal();
                }
            });
    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
        setTitle("Payment Cancelled");
        setMessage("The payment was cancelled");
        showModal();
    }

    const onError = (err) => {
        console.log("Error!", err);
        setTitle("Error");
        setMessage("There was an error processing the payment");
        showModal();
    }

    let env = 'sandbox';
    let currency = 'USD';
    
    const client = {
        sandbox: process.env.REACT_APP_APP_ID,
        production: 'YOUR-PRODUCTION-APP-ID',
    }   

    return (
        <>
        <PaypalExpressBtn 
        env={env} 
        client={client} 
        currency={currency} 
        total={props.total} 
        onError={onError} 
        onSuccess={onSuccess} 
        onCancel={onCancel} 
        />

        <ModalComponent show={isOpen} onHide={hideModal} title={title} message={message} />

        <SuccessModal show={isSuccessOpen} onHide={hideSuccessModal} email={props.data.email}/>
        </>
    );
}

export default PayPalButton