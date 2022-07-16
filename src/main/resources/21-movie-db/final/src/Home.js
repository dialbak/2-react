import React from 'react'
import Form from './SearchForm'
import {API_ENDPOINT} from "./context";
import Movies from "./Movies";

const Home = () => {
    console.log("============" + API_ENDPOINT + "============")
    return (
        <main>
            <Form/>
            <Movies />
        </main>
    )
}

export default Home
