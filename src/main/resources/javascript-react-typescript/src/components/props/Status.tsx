type StatusProps = {
    status: 'loading' | 'success' | 'error',
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'loading'
    } else if (props.status === 'success') {
        message = 'Data fetch successfully'
    } else if (props.status === 'error') {
        message = 'Error fetching data'
    }
    return <p>Status - {message}</p>
}
