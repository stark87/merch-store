import { v4 as uuidv4 } from 'uuid';
export const reducer = (state, action) => {

    const getItem = (id) => {
        const product = state.products.find(item => item.id === id);
        return product;
    }

    switch (action.type) {

        case 'ADD_TO_CART': {
            let tempProduct = state.products
            const index = tempProduct.indexOf(getItem(action.id));
            const product = {...tempProduct[index]};
            product.inCart = true;
            product.uid = uuidv4();
            product.count = 1;
            const price = product.price;
            product.total = price;
            product.option = null
            if ((product.type === "phone case" || product.type === "clothes" || product.type === "skate deck")) {
                product.option = state.option;
            }
            let tempCart = state.cart
            if (state.cart.length > 0 &&
                tempCart.some((cartItem) => {
                    return cartItem.id === product.id && cartItem.option === product.option
                })
            ) {
                alert("Item already in cart");
                return{
                    ...state,
                };
            }
            alert("Item added to cart");
            return {
                ...state,
                products: tempProduct,
                cart: [...state.cart, product]
            }
        }

        case 'SET_OPTION': {
            return {
                ...state,
                option: action.option.toLowerCase()
            }
        }

        case 'REMOVE_ITEM': {
            let tempCart = state.cart
            tempCart = tempCart.filter(item => item.uid !== action.uid)
            return {
                ...state,
                cart: tempCart
            }
        }

        case 'CREMENT': {
            let tempCart = [...state.cart];
            const cartItem = tempCart.find(item => item.uid === action.uid);
            cartItem.count = Number(action.value);
            cartItem.total = cartItem.count * cartItem.price;
            return {
                ...state,
                cart: tempCart
            }
        }

        case 'SUM_TOTAL': {
            let subTotal = 0;
            state.cart.map(item => (subTotal += item.total));
            const tempTax = subTotal * 0.1
            const tax = parseFloat(tempTax.toFixed(2));
            const total = subTotal + tax
            subTotal = subTotal.toFixed(2);
            return {
                ...state,
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,

            }
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                cart: []
            }
        }
        default:
            return state;
    }
}