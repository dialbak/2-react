import React, {Component} from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            movie: ""
        }
    }

    removeStorages() {
        this.props.remove("firstName")
        this.props.remove("movie")
        const firstName = this.props.load("firstName")
        const movie = this.props.load("movie")
        this.setState({firstName: firstName, movie: movie})
    }

    componentDidMount() {
        const firstName = this.props.load("firstName")
        const movie = this.props.load("movie")

        // mock request
        if (!firstName || !movie) {
            setTimeout(() => {
                this.props.save("firstName", "Jean");
                this.props.save("movie", "Fight Club");
                this.setState({
                    firstName: "Jean",
                    movie: "Fight Club"
                });
            }, 1000);
        } else {
            this.setState({firstName, movie})
        }
    }

    render() {
        const {firstName, movie} = this.state
        if (!firstName || !movie) return <div>loading....</div>
        return (
            <>
                <button onClick={() => this.removeStorages()}>remove storage</button>
                <div>
                    My name is {firstName}, and and like {movie}.
                </div>
            </>
        );
    }
}


export default MyComponent;
