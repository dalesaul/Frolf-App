import React, { Component } from "react";
import { Link } from "react-router-dom";
import flag from "./GFlag_icon.png"
import { homedir } from "os";

export default class HoleCard extends Component {

    // need to add state to access hole# ?
    render() {

        return(
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">
                <img src={flag} className="icon--flag" alt="Flag Icon"/>
                Hole {this.props.id}

                {/* also the id here for the details, technically links to the holes database but
                the user should be updating their hole score for the round. need to fix also */}
                <Link className="nav-link" to={`roundStart/currhole`}>
                Enter Score
                </Link>
                </h5>

                </div>


            </div>
        )
    }
}
