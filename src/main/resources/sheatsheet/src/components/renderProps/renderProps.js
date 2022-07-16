import React, {Component} from 'react';

const ChildComponent = ({x, y}) => (
    <div>x:{x}, y:{y}</div>
)

class RenderProps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(e) {
        const {clientX, clientY} = e
        const getState = {...this.state}
        getState.x = clientX
        getState.y = clientY
        this.setState({...getState})
    }

    render() {
        const {x, y} = this.state
        return (
            <div onMouseMove={e => this.handleMouseMove(e)}>
                <h1>Render props</h1>
                <ChildComponent x={x} y={y}/>
            </div>
        )
    }
}

export default RenderProps;
