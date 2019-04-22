import React, { Component } from "react";
import HistoryCard from "./HistoryCard"
import { Link } from "react-router-dom";
// import CourseManager from "../../modules/CourseManager";
import RoundManager from "../../modules/RoundManager";

export default class RoundFinish extends Component {

  state ={
    roundScore: ""
  }

  //GET ALL scores FOR THIS ROUND FROM THE shots DATABASE
  componentDidMount(){

    RoundManager.getFullRound(this.props.match.params.roundId)
    .then((round) => {
      console.log(round,"this is the parsed return for round shots")
      var shotScores = round.map(function(shots) {
        return shots.score;

      })
      //THIS ADDS holeScores TOGETHER TO GET A roundScore.
      var total = shotScores.reduce(function(prev, curr) {
        return prev + curr;
      });

      this.setState ({
        roundScore: total,


    })
    })
  }

    render () {

        return (
            <React.Fragment>
                <section className="rounds-section">
                <div key={this.props.match.params.roundId} className="card">

                    <HistoryCard key={this.props.match.params.roundId} roundScore={this.state.roundScore}
                    />

                </div>
                <button
                href="#"
                className="btn btn-danger"
                onClick={() =>
                  RoundManager.deleteRound(this.props.match.params.roundId)
                    .then(() => this.props.history.push("/home"))
                }
              >
                Delete
              </button>
              <Link className="nav-link" to={"/home"}
                    >
                    go Home
                    </Link>
              </section>
              </React.Fragment>
        )
      }
      }