import {LOAD_PRODUCTS} from "./action";

const reducer = (state, action) => {

    if (action.type === LOAD_PRODUCTS){
        return {
            ...state,
            all_products: action.payload
        }
    }
    console.log(state)

    throw new Error('no matching action type')
}

export default reducer