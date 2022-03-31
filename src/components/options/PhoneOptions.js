import { useContext, useEffect } from "react";
import { ProductContext } from '../../context';


const PhoneOptions = () => {
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
                    console.log(current[0]);
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
            <span className='d-flex justify-content-center'>Phone Options</span>
            <span className='d-flex justify-content-center py-4'>
                <button className='option current'>8</button>
                <button className='option'>8+</button>
                <button className='option'>X</button>
                <button className='option'>XS</button>
                <button className='option'>XSMax</button>
            </span>
        </div>
    );
}
 
export default PhoneOptions;