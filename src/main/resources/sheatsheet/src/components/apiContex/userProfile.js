import React from 'react';

let about = {
    name: "bak",
    backgroundColor: "red",
    maxWidth: "30%",
    display: "inline-block",
}
const UserContext = React.createContext(about);

const UserProfile = () => {
    return (
        <UserContext.Consumer>
            {context => <div>Profil de {context.name}</div>}
        </UserContext.Consumer>
    )
}

class RenderContext extends React.Component {

    static contextType = UserContext;

    render() {
        let {name, backgroundColor, maxWidth, display} = this.context
        return (
            <div>
                <UserProfile/>
                <UserContext.Provider value={""}>
                    <div style={{
                        backgroundColor: backgroundColor,
                        maxWidth: maxWidth,
                        display: display
                    }}
                    >Profil de {name}</div>
                </UserContext.Provider>
            </div>
        );
    }
}

export default RenderContext
