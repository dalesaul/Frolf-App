import React, {Component} from 'react';
// import { Link } from "react-router-dom";



class Welcome extends Component {

    render() {
        return (
            <article className="">
            <h3>Welcome to FFrolf!</h3>
            <p>The Huntington WV based Friendly Frisbee golf (FFrolf) shot tracker. Come on in and join us. </p>
            {/* <Link className="nav-link" to={"/login"}>
              Wanna play around?
            </Link> */}

            </article>

        );
    }
}


export default Welcome;