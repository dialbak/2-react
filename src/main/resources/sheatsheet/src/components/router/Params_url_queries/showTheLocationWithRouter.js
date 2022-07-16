const {withRouter} = require("react-router-dom");


const ShowTheLocationWithRouter = withRouter(({location}) => (<div>
        L'URL (location) est {location.pathname}
    </div>)
)

export default ShowTheLocationWithRouter
