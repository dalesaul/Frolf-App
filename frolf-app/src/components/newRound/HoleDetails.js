import React, { Component } from 'react'

import {Button} from "./CMoreButt";

export default class HoleDetails extends Component {


    state = {
        holeId: "",
        holeNumber: "",
        holePar: "",
        userId: "",
        count: 0,
    }


    // ConstructNewHoleScore = evt => {
    //     evt.preventDefault();
    //     const holeScore = {
    //         number: this.state.holeNumber,
    //         par: this.state.holePar,
    //         userID: parseInt(this.state.userId)
    //     }}
    handleCount(value) {
            this.setState((prevState) => ({ count: prevState.count + value }))


    this.props
        .addHoleScore()
        .then(() => this.props.history.push("/"));
    }

    render (){
        const currHole =
        this.props.holes.find(
            a => a.id === parseInt(this.props.match.params.holeId)
        ) || [];

    return (
        <section className="hole">
        <div key={currHole.id} className="card">
          <div className="card-body">
            <h4 className="card-title">

              {currHole.number}
            </h4>
            <div>
            Current count: {this.state.count}
            <hr />
            <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
            <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
            </div>
            <h6 className="card-floor">{currHole.par}</h6>
            </div>
            <button
            href="#"
            className="btn btn-warning"
            onClick={() =>
                this.props
                    .editPar(currHole.id)}
                    >
                    Edit Par
                    </button>


        </div>
        </section>


        )
    }
}



