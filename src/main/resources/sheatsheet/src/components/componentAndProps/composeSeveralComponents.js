import React, {Component} from 'react';

const ImgComponent = ({url}) => (
    <img style={{maxWidth: "100px"}} src={url} alt="img"/>
)

const AboutComponent = ({txt}) => (
    <p>{txt}</p>
)

class ComposeSeveralComponents extends Component {

    data = {
        url: "https://images.pexels.com/photos/7823/selfie.jpg",
        txt: "Jean est un type banal mais qui ne manque pas de classe."
    }

    render() {
        const {url, txt} = this.data
        return (
            <div>
                <ImgComponent url={url}/>
                <AboutComponent txt={txt}/>
            </div>
        );
    }
}

export default ComposeSeveralComponents;
