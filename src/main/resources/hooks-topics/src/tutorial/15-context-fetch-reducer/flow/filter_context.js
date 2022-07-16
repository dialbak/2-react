import React, {useEffect, useContext, useReducer} from "react"
import {LOAD_PRODUCTS} from "./action";
import axios from "axios"
import reducer from "./reducer"

const products_url = 'https://course-api.com/react-store-products'

const initialState = {
    all_products: []
}

const FilterContext = React.createContext()

export const FilterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchProducts = async (url) => {
        try {
            const response = await axios.get(url)
            const product = response.data
            //console.log(product)
            dispatch({type: LOAD_PRODUCTS, payload: product})
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts(products_url)
    }, [])

    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

