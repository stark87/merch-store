import React from 'react'

const Footer = () => {
    return (
        <div className="row row-cols-1 m-0 py-4" id="social-media">
            <div className="col d-flex flex-row justify-content-center py-4">
                <a href="#" className="fa fa-facebook fa-2x px-3 px-md-4"></a>
                <a href="#" className="fa fa-twitter fa-2x px-3 px-md-4"></a>
                <a href="#" className="fa fa-instagram fa-2x px-3 px-md-4"></a>
                <a href="#" className="fa fa-youtube fa-2x px-3 px-md-4"></a>
                <a href="#" className="fa fa-soundcloud fa-2x px-3 px-md-4"></a>
            </div>
            <div className="col d-flex flex-md-row flex-column justify-content-center py-4">
                <a href="#" className='align-self-center py-2'>&copy; 2021, Joyner Lucas <span id='s'> &nbsp;|&nbsp;&nbsp;</span></a>
                <a href="#" className='align-self-center py-2'>Search <span id='s'>&nbsp;|&nbsp;&nbsp;</span></a>
                <a href="#" className='align-self-center py-2'>About Us <span id='s'>&nbsp;|&nbsp;&nbsp;</span></a>
                <a href="#" className='align-self-center py-2'>Shipping and Return Policy</a>
            </div>
        </div>
    )
}

export default Footer
