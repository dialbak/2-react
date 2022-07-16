import React from 'react';

/**
 * when we make a request, this component is showing until the the response is ok
 * @returns {JSX.Element}
 */
export default () => {
  return (
    <div style={ { minHeight: '100vh'} } className="d-flex flex-row justify-content-center align-items-center w-100">
      <img alt="loading gif" src="https://i.redd.it/ounq1mw5kdxy.gif" />
    </div>
  );
}
