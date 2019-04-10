import React, { Component } from 'react'
import HoleCard from './holeCard';
import HoleManager from "../../modules/HoleManager"
import RoundManager from '../../modules/RoundManager';


export default class RoundStart extends Component {

    state = {

        roundId: "",
        date: "",
        // userId: "",
        courseId: "",
        roundScore: "0",
        holes: [],
        // number: "",
        // par: ""

    }
    // ConstructNewHoleScore = evt => {
    //     evt.preventDefault();
    //     const holeScore = {
    //         holeId: this.props.match.params.holeId,
    //         courseId: this.props.match.params.courseId,
    //         roundId: this.props.match.params.roundId,
    //         score: this.state.count

    //     };
    //    RoundManager
    //    .addHoleScoreToRound(holeScore)
    // .then(() => this.props.history.goBack());
    // finalizeRound = evt => {
    //     evt.preventDefault();
    //     const roundScore = {}
    //     .then(RoundManager.getOne(this.propms.match.params.roundId).then(round =>
    //         round.map(r => {

    //         })
    //     }))
    // }


    componentDidMount(){

        return RoundManager.getOne(this.props.match.params.roundId).then(round => {
            this.setState({
                roundId: round.id,
                date: round.date,
                courseId: round.courseId
            })})
            .then(HoleManager.getAllCourseHoles(this.props.match.params.courseId).then(holes => {
                this.setState({holes})
            }))

        }



    render() {



        return (

          <React.Fragment>
            <div>

                <section className="round-holes">

                    {this.state.holes.map(singleHole => (

                    <HoleCard key={singleHole.id} id={singleHole.number} value={singleHole.par} courseId={this.state.courseId}
                    roundId={this.state.roundId} holeId={singleHole.id}/>

                    ))
                    }
                    {/* <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.finalizeRound}

                    >
                        Finish Round
                    </button> */}
                </section>
            </div>
        </React.Fragment>
      )
    }
}
