import React, { Component } from "react";
import HistoryCard from "./HistoryCard"
import { Link } from "react-router-dom";
// import CourseManager from "../../modules/CourseManager";
import RoundManager from "../../modules/RoundManager";

export default class RoundFinish extends Component {

  state ={
    roundScore: "",
    // date: ""
    // courseName: "",
    // scores: []
  }

  //GET ALL scores FOR THIS ROUND FROM THE shots DATABASE
  componentDidMount(){

    RoundManager.getFullRound(this.props.match.params.roundId)
    .then((round) => {
      console.log(round,"this is the parsed return for round shots")
      var shotScores = round.map(function(shots) {
        return shots.score;

      })
      // console.log(round.scores);
      var total = shotScores.reduce(function(prev, curr) {
        return prev + curr;
      });

      this.setState ({
        roundScore: total,


    })
    })
  }
  // console.log(total, "this is totalScore?")



    // , THEN ADD THEM TOGETHER TO GET A roundScore.
    // .then(totScore = this.r.score.reduce(totScore, nextValue => totScore += nextValue, 0))
    //   .then(this.setState({
    //     roundScore: totScore,
    //     roundId: this.props.match.params.roundId
    //   }))
      // THIS GETS courseName TO APPEND TO ROUND SUMMARY
      // .then((CourseManager.getOne(this.props.match.params.courseId)))
      // .then(course => {
      //   course.find(course.name)
      //     this.setState({
      //       courseName: course.name
      //     })
      //   })


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