import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FilterContextProvider} from "./tutorial/15-context-fetch-reducer/flow/filter_context";


ReactDOM.render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
  document.getElementById('root')
);
