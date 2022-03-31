import React from 'react';
import emailjs from '@emailjs/browser';
import { renderEmail } from 'react-html-email'
import MyEmail from './cartEmailTemplate';

export const sendEmail = (data, name, email) => {

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const userName = capitalize(name);

    const messageHtml = renderEmail(<MyEmail data={data}/>);

    emailjs.send('service_gypejrk', 'template_sh6597h', 
    {
        subject: "Purchase Invoice",
        name: `Hello ${userName}, here is your invoice for the items you purchased from Merch-store`,
        message: messageHtml,
        user_email: email,
    },
    "q42MlwCSdScg1eV_v")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};
