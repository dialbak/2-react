import React, {Component} from 'react';
import axios from "axios";
import ListUsers from "./listUsers";
import AddUser from "./addUser";

class AxiosRequest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            selectedUser: null
        }
    }

    componentDidMount() {
        axios.get('/users')
            .then(response => response.data)
            .then(users => this.setState({users}))
            .catch(err => console.log(err))
    }

    deleteUser = (id) => {
        axios.delete(`/users/${id}`)
            .then(res => console.log(res))
    }

    render() {
        return (<div style={{minHeight: '100vh'}}
                     className="container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center">
                <ListUsers deleteUser={this.deleteUser} users={this.state.users}
                           selectUser={(index) => this.setState({selectedUser: index})}/>
                <hr className="w-100 my-5"/>
                <AddUser user={this.state.users && this.state.users[this.state.selectedUser] ?
                    this.state.users[this.state.selectedUser] : null}/>
            </div>
        );
    }
}

export default AxiosRequest
