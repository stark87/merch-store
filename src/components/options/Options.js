import React from 'react'
import ClothesOptions from './ClothesOptions';
import PhoneOptions from './PhoneOptions';
import SkateOption from './SkateOption';

class Options extends React.Component {
    render() {
        let option;
        switch (this.props.type) {
            case "clothes":
                option = <ClothesOptions />;
                break;
            case "phone case":
                option = <PhoneOptions />;
                break;
            case "skate deck":
                option = <SkateOption />;
                break;
            default:
                option = null
        }
        return <span>{option}</span>
    }
}
 
export default Options;