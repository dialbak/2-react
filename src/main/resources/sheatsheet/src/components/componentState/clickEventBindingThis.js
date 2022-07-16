import React, {Component} from 'react';

class ClickEventBindingThis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }


    decrement = () => this.setState({count: this.state.count - 1})


    render() {
        const {count} = this.state
        const style = {margin: "5px"}
        return (
            <div>
                {count}
                <button onClick={this.increment} style={style}>+</button>
                <span>|</span>
                <button onClick={this.decrement} style={style}>-</button>
                <button onClick={() => this.setState({count: 0})}  style={style}>Reset</button>
            </div>
        );
    }


}

export default ClickEventBindingThis;
