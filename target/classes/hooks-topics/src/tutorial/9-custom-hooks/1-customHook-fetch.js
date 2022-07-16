import React, {useState, useEffect} from 'react'
import {useFetch} from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

export default () => {

    const {loading, products} = useFetch(url)
   products && console.log(products)

    return (
        <>
            <h2>{loading ? 'loading...' : 'console.log data'}</h2>
        </>
    )
}