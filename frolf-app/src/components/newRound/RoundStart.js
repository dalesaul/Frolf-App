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



    componentDidMount(){

        return RoundManager.getOne(this.props.match.params.courseId).then(round => {
            this.setState({
                roundId: round.id,
                date: round.date,
                courseId: round.courseId
            })})
            .then(HoleManager.getAllCourseHoles(this.props.match.params.courseId).then(holes => {
                this.setState({
                    holes
                //     {
                //             id: holes.id,
                //             courseId: holes.courseId,
                //             number: holes.number,
                //             par: holes.par
                // }
                })

            }))

        }



    render() {
        return (
          <React.Fragment>
            <div>
                <section className="round-holes">

                    {this.state.holes.map(singleHole => (

                    <HoleCard key={singleHole.id} id={singleHole.number} value={singleHole.par} />

                    ))
                    }

                </section>
            </div>
        </React.Fragment>
      )
    }
}
