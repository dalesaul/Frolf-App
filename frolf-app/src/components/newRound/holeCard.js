import React, { Component } from "react";
import { Link } from "react-router-dom";
import flag from "./GFlag_icon.png"



export default class HoleCard extends Component {

// state= {
//     roundScore: "",
//     roundId: "",
//     courseId: ""

// }



    render() {

        return(
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">
                Hole {this.props.id}
                <img src={flag} className="icon--flag" alt="Flag Icon"/>
                Par {this.props.value}

                <Link className="nav-link" to={`/${this.props.roundId}/${this.props.courseId}/${this.props.holeId}`}  >
                {/* roundId={this.props.roundId} holeNumber={this.props.id} holeId={this.props.holeId} */}
                Enter Score
                </Link>

                </h5>
                <Link className="nav-link" to={`/editPar/${this.props.holeId}/`}
                    >
                    Edit Par
                    </Link>
                </div>


            </div>
        )
    }
}
