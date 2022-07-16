import React, {useState, useEffect} from 'react';
const url = 'https://api.github.com/users/dialbak';

export default () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user')

    const fakeTimer = () => {
        setTimeout(()=> {
            setIsLoading(false)
        }, 2000)
    }

    useEffect(() => {
        fakeTimer()
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user) => {
                const {login} = user
                setUser(login)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            {
                isLoading ? <h1>Loading...</h1> :
                    isError ? <h1>Error...</h1> :
                        <h1>{user}</h1>
            }
        </div>
    );
}