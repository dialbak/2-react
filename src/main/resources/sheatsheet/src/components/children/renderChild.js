import React, {Component} from 'react';

class RenderChild extends Component {
    render() {
        return (
            <div>
                <p>Render Child comp</p>
                {this.props.children}
            </div>
        );
    }
}

export default RenderChild;
