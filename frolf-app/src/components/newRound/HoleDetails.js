import React, { Component } from 'react'
import cage from "./fCage.png"
import {Button} from "./CMoreButt";
import "./rounds.css"
import RoundManager from '../../modules/RoundManager';

export default class HoleDetails extends Component {


    state = {
        roundId: "",
        holeId: "",
        holeNumber: "",
        courseId: "",
        userId: "",
        count: 0,
    }

    handleCount(value) {
            this.setState((prevState) => ({ count: prevState.count + value }));
    }

    ConstructNewHoleScore = evt => {
                evt.preventDefault();
                const holeScore = {
                    holeId: this.props.match.params.holeId,
                    courseId: this.props.match.params.courseId,
                    roundId: this.props.match.params.roundId,
                    score: this.state.count

                };
               RoundManager
               .addHoleScoreToRound(holeScore)
            .then(() => this.props.history.goBack());
    };



    componentDidMount() {
        return RoundManager.getOne(this.props.match.params.roundId)
        .then(this.props.match.params.courseId)
        .then(this.props.match.params.holeId)



    }


    render (){

    const roundHole =
    this.props.holes.find(
        h => h.id === parseInt(this.props.match.params.holeId)
    ) || {};

    return (
        <section className="hole">
        <div key={roundHole.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
            <img src={cage} className="icon--cage" alt="Cage Icon"/>
              Score

            </h4>
            <div>
            Current count: {this.state.count}
            <hr />
            <Button className="plusButt" sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
            <Button className="minusButt" sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
            </div>
            <h6 className="card-floor">{this.props.value}</h6>
            </div>

            <button
            type="submit"
            className="btn btn-success score-btn"
            onClick={this.ConstructNewHoleScore}
                   >
                    Submit Score
                    </button>


        </div>
        </section>


        )
    }
}



