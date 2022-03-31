import React from 'react'
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from '../context'
import Options from './options/Options';
import Share from './Share';
import CustomButton from './CustomButton';
import Markdown from 'marked-react';


const Details = () => {
    const { state, dispatch } = useContext(ProductContext);
    const { id } = useParams();
    const ids = id;

    const fileName = `${ids}.md`;

    const [about, setAbout] = useState('');

    useEffect(() => {
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems[0].className = carouselItems[0].className + " active";
        const indicators = document.querySelectorAll(".indicator");
        indicators[0].className = indicators[0].className + " active";

        import(`/public/md/${fileName}`)
            .then(res => {
                fetch(res.default)
                .then(res => res.text())
                .then(res => setAbout(res))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        // return () => {
        //     cleanup
        // }
    }, [about, state.cart, fileName])

    return (
        <ProductContext.Consumer>
            {(value)=>{
                const { id, title, img, price, type } = value.state.products[ids-1];
                return(
                    <div className="row px-md-4 m-0">
                        <div id="carouselExampleIndicators" className="carousel slide d-md-none px-0" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">
                                {img.map(img => {
                                    return <div className="carousel-item" key={img}>
                                        <img src={"/" + img} className="d-block w-100" alt="..." />
                                    </div>
                                })}
                            </div>
                            <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <div className="carousel-indicators py-3 m-0">
                                {img.map((img, index) => {
                                    return <button type="button" className= "indicator" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} key={img}></button>
                                })}
                            </div>
                        </div>

                        
                        <div className='d-md-none' style={{ height: "9vh" }}><span></span></div>

                        <div className="col-7 d-none d-md-block px-2">
                            <div className="row">
                                {img.map(img => {
                                    return <div className="col-11 py-3" key={img}>
                                        <img src={"/" + img} alt="product" className="img-fluid w-100" />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="col-12 col-md-5 py-md-5 px-4 info">
                            <div className="row">
                                <h2 className='text-center text-uppercase'><strong>{title}</strong></h2>
                                <h5 className='text-center py-3'>
                                    ${price}
                                    {Number.isInteger(price) ? ".00" : null}
                                </h5>
                                <div style={{ height: "4vh" }}><span></span></div>
                                <Options type={type} />
                                <span className='d-flex flex-column flex-lg-row justify-content-center py-4'>
                                    <CustomButton className='text-uppercase my-2' onClick={() => dispatch({type: 'ADD_TO_CART', id: id})}>Add to Cart</CustomButton>
                                    {/* <CustomButton className='text-uppercase my-2' style={{ backgroundColor: "black", color: "white" }}>Buy it Now</CustomButton> */}
                                </span>
                                <div style={{ height: "6vh" }}><span></span></div>
                                <div className='px-4'>
                                    <Markdown value={about} />
                                </div>
                                <Share />
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductContext.Consumer>
    )
}

export default Details;
