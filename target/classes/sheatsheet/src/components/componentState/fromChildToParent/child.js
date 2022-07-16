import React, {Component} from 'react';

class Child extends Component {
    render() {
        const {value, handleChangeSelectValue} = this.props
        return (
            <div>
                Valeur de la checkbox :
                <input type="checkbox" onChange={handleChangeSelectValue}/>
                {`${value}`}
            </div>
        );
    }
}

export default Child;
