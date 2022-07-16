import React from 'react';

function Comp() {
    let idx = [1, 1, 1]
    return (
        <span>
            {idx.map(i => i)}
        </span>
    )
}

const Fragment = () => <><Comp/></>

export default Fragment;
