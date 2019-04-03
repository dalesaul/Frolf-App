import React, { Component } from 'react'
import flag from "./GFlag_icon.png"

export default class HoleDetails extends Component {
    render (){

        const hole =
        this.props.holes.find(
            a => a.id === parseInt(this.props.match.params.holeId)
        ) || {};

        return (
<section className="hole">
        <div key={hole.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={flag} className="icon--flag" alt="Flag Icon"/>
              {hole.number}
            </h4>
            <h6 className="card-title">{hole.par}</h6>
            </div>
        </div>
        </section>


        )
    }
}