import { useContext, useEffect } from "react";
import { ProductContext } from '../../context';


const ClothesOptions = () => {
    const { dispatch } = useContext(ProductContext);

    useEffect(() => {
        let elements = document.querySelectorAll(".option");
        let current = document.querySelectorAll('.current');
        let option1 = current[0].innerText;
        dispatch({ type: 'SET_OPTION', option: option1 })
        elements.forEach(element => {
            element.addEventListener('click',
                () => {
                    let current = document.querySelectorAll('.current');
                    current[0].className = "option";
                    element.className = "option current"
                    option1 = element.innerText;
                    dispatch({ type: 'SET_OPTION', option: option1 })
                }
            )
        })
    }, [])

    return (
        <div>
            <span className='d-flex justify-content-center'>Sizes</span>
            <span className='d-flex justify-content-center flex-wrap py-4'>
                <button className='option'>XS</button>
                <button className='option'>S</button>
                <button className='option'>M</button>
                <button className='option current'>L</button>
                <button className='option'>XL</button>
                <button className='option'>XXL</button>
                <button className='option'>XXXL</button>
                <button className='option'>XXXXL</button>
            </span>
        </div>
    );
}

export default ClothesOptions;