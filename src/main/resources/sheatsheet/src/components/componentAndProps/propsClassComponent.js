import React, {Component} from 'react';

class PropsClassComponent extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default PropsClassComponent;
