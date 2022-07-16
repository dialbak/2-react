import React, {Component} from 'react';
import Child from "./child";

class Parent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }
    handleChangeSelectValue = () => this.setState({value: !this.state.value})


    render() {
        return (
            <div>
                <Child
                    value={this.state.value}
                    handleChangeSelectValue={() => this.handleChangeSelectValue()}
                />
            </div>
        );
    }
}

export default Parent
