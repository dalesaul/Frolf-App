import React, { Component } from "react"
import NavBar from "./NavBar/NavBar"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"
import Auth0Client from "./Authentication/Auth"
// import { bubble as Menu } from "react-burger-menu";
import {withRouter} from "react-router-dom"
import "./frolf.css"



class Frolf extends Component {
    async componentDidMount() {
        if (this.props.location.pathname === '/callback') return;
        try {
            await Auth0Client.silentAuth();
            this.forceUpdate();
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error);
        }
        }

    render () {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}
export default withRouter(Frolf);