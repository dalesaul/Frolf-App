import React, {Component} from 'react';
import logo from "./ffrolf_logo.png"




class Welcome extends Component {

    render() {
        return (
            <section className="welcome">
            <img src={logo} className="icon--logo" alt="logo Icon"/>
            <h1>Welcome to FFrolf!</h1>
            <h5 className="wm">The Friendly Frisbee golf (FFrolf) shot tracker based in Huntington WV.  </h5>
            <h5 className="wm">Come on in -- let's play around.</h5>

            </section>

        );
    }
}


export default Welcome;