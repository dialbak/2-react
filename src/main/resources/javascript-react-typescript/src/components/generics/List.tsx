type ListProps<T> = {
    items: T[],
    handleClick: (value: T) => void
}

export const List = <T extends { id: number }>({items, handleClick}: ListProps<T>) => {
    return (
        <div>
            <p>List of items</p>
            {items.map(item => {
                return (
                    <div key={item.id} >
                        {item.id} <button onClick={() => handleClick(item)}>Button</button>
                    </div>
                )
            })}
        </div>
    )
}
