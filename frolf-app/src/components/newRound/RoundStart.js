import React, { Component } from 'react'
import HoleManager from "../../modules/HoleManager"
import NewRoundCard from './newRoundCard';

export default class RoundStart extends Component {
    render() {
      return (
        <section className="round-holes">
        {HoleManager.getAllCourseHoles()
            .then(this.map(singleHole => (
          <NewRoundCard key={singleHole.id} hole={singleHole.number} par={singleHole.par}/>
        )))}
      </section>

      )
    }
}