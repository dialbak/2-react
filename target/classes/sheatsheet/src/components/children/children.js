import React, {Component} from 'react'

const Recept = (props) => {
    let items = [];
    for (let i = 0; i < props.iterations; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

const Liste = () => {
    return (
        <Recept iterations={10}>
            {(index) => <span key={index}># {index + 1}</span>}
        </Recept>
    );
}

const Receptor = ({iterations}) => {
    let items = []

    for (let i = 0; i < iterations; i++) {
        items.push(i)
    }

    return (
        items.map((item, id) => (
            < span key={id}> * {item + 1} < /span>
        ))
    )
}

class Children extends Component {
    render() {
        return (
            <div>
                <br/>
                <Receptor iterations={10}/>
                <Liste/>
            </div>
        );
    }
}

export default Children;
