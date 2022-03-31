import { useContext, useEffect } from "react";
import { ProductContext } from '../../context';


const SkateOption = () => {
    const { dispatch } = useContext(ProductContext);

    useEffect(() => {
        let elements = document.querySelectorAll(".option");
        let current = document.querySelectorAll('.current');
        let option1 = current[0].innerText;
        dispatch({type: 'SET_OPTION', option: option1})
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
            <span className='d-flex justify-content-center'>Mount Options</span>
            <span className='d-flex flex-column flex-lg-row justify-content-center py-4'>
                <button className='option current'>WITH MOUNTS</button>
                <button className='option'>WITHOUT MOUNTS</button>
            </span>
        </div>  
    );
}
 
export default SkateOption;