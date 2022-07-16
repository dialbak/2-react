import React, {Component} from 'react';

class MapListRemove extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: [1, 2, 3],
            users: [
                {name: 'Pierre', id: 1},
                {name: 'Paul', id: 2},
                {name: 'Jacques', id: 3}
            ]
        }
    }

    delete(i) {
        let number = [...this.state.number]
        number.splice(i, 1)
        this.setState({number})
    }

    deleteElem(id) {
        let users = [...this.state.users.filter(user => user.id !== id)]
        this.setState({users})
    }

    render() {
        let {number, users} = this.state
        return (
            <div>
                {number.map((n, i) => (
                    <li key={i}>
                        {n}
                        <button onClick={() => this.delete(i)}>&times;</button>
                    </li>
                ))}
                <br/>
                {users.map((user, id) => {
                    return (
                        <li key={id}>
                            {user.name}
                            <button onClick={() => this.deleteElem(user.id)}>&times;</button>
                        </li>
                    )
                })}
            </div>
        );
    }
}

export default MapListRemove;
