import React from 'react'
import styled from 'styled-components'
import {useFilterContext} from "./flow/filter_context";

const Filters = () => {

    const {
        all_products
    }= useFilterContext()
    console.log(all_products)
    return (
        <Wrapper>
            Filters
        </Wrapper>
    )
}


const Wrapper = styled.section`
  
`

export default Filters