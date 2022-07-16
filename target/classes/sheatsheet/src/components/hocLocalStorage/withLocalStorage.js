import React from "react";

const withStorage = (Component) => {

    class HOC extends React.Component {

        load = (key) => localStorage.getItem(key);

        save = (key, data) => localStorage.setItem(key, data);

        remove = (key) => localStorage.removeItem(key);

        render() {
            return (
                <Component
                    load={this.load}
                    save={this.save}
                    remove={this.remove}
                    {...this.props}
                />
            );
        }
    }

    return HOC;
}

export default withStorage;
