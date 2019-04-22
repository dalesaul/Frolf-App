import React, { Component } from 'react'
import HoleCard from './holeCard';
import HoleManager from "../../modules/HoleManager"
import RoundManager from '../../modules/RoundManager';


export default class RoundStart extends Component {

    state = {

        roundId: "",
        date: "",
        courseId: "",
        roundScore: "0",
        holes: []

    }



    finalizeRound = evt => {
        evt.preventDefault();
        this.props.history.push(`/roundHistory/${this.props.match.params.roundId}`)

}




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

                     <button
                    type="submit"
                    className="btn btn-success final-btn"
                    onClick={this.finalizeRound}

                    >
                        Finish Round
                    </button>
                </section>
            </div>
        </React.Fragment>
      )
    }
}
