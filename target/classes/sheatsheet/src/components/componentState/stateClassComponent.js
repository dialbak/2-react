import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 32,
            zoom: false
        }
    }

    updateStateAge = () => {
        let state = {...this.state}
        setTimeout(() => {
            state.age = state.age + 1
            state.zoom = true
            this.setState({...state})
        }, 3000)
    }

    componentDidMount() {
        this.updateStateAge()
    }

    render() {
        const {name} = this.props
        const {age, zoom} = this.state
        const style = zoom ? {backgroundColor: "red", color: "white"} : null

        return (
            <div>
                {name} <span style={style}>{age}</span>
            </div>
        );
    }
}

class StateClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    changeName = () => {
        this.setState({name: "bob dylan"})
    }

    render() {
        const {name} = this.state
        return (
            <div>
                <ChildComponent name={name}/>
                <button onClick={this.changeName}>Change name</button>
            </div>
        );
    }
}

export default StateClassComponent;
