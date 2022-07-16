import React, {Component} from 'react';

class This extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    setThisDefault(e) {
        this.setState({text: `Fonction fléchée, event is ${e._reactName}`})
    }

    setThisDefaultBind() {
        this.setState({text: "use bind this"})
    }

    setThis = () => this.setState({text: "classic notation"})

    render() {
        const {text} = this.state
        return (
            <div>
                <button onClick={e => this.setThisDefault(e)}>Way One</button>
                <button onClick={this.setThisDefaultBind.bind(this)}>Way Two</button>
                <button onClick={this.setThis}>Way Three</button>
                <p>{text}</p>
            </div>
        );
    }
}

export default This
