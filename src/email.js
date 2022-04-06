import React from 'react';
import emailjs from '@emailjs/browser';
import { renderEmail } from 'react-html-email'
import MyEmail from './cartEmailTemplate';

export const sendEmail = async (data, name, email) => {
    let result;

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const userName = capitalize(name);

    const messageHtml = renderEmail(<MyEmail data={data}/>);

    result = await emailjs.send('service_gypejrk', 'template_sh6597h', 
    {
        subject: "Purchase Invoice",
        name: `Hello ${userName}, here is your invoice for the items you purchased from Merch-store`,
        message: messageHtml,
        user_email: email,
    },
    process.env.REACT_APP_USER_ID)
        .then((res) => {
            return res.status
        })
    
    return result;
};
