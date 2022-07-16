import React, {Component} from 'react';

class isLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    toggleConnexion() {
        console.log(this.state)
        this.setState({isLogin: !this.state.isLogin})
    }

    render() {
        const {isLogin} = this.state
        return (
            <div>
                <h3> {isLogin ? "Bienvenue" : "Connectez vous !"} </h3>
                <button onClick={() => this.toggleConnexion()}>
                    {isLogin ? "Déconnexion " : "Connexion"}
                </button>
            </div>
        );
    }
}

export default isLogin;
