import React, {Component} from 'react'

function Child({array}) {
    return (
        <div>
            {
                array.length > 0 && array.length === 1 ?
                    <p>Vous avez 1 message</p> :
                    <p>Vous avez {array.length} messages</p>
            }
        </div>
    )
}

class ConditionalRendering extends Component {

    messages = ["messages","messages", "messages"]

    render() {
        return (
            <div>
                <Child array={this.messages}/>
            </div>
        );
    }
}

export default ConditionalRendering;

