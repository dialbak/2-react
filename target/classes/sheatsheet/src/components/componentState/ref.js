import React, {Component} from 'react';

class Ref extends Component {

    constructor(props) {
        super(props)
        this.inputText = React.createRef()
    }

    focusInputText = () => this.inputText.current.focus()


    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.inputText}
                />
                <input
                    type="button"
                    value={"focus input"}
                    onClick={() => this.focusInputText()}
                />
            </div>
        );
    }
}

export default Ref;
