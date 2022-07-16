import React from 'react'

const User = ({match}) => {
    return (
        <div>User profile: {match.params.id}</div>
    );
}

export default User
