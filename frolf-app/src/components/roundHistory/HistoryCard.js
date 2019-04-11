import React, { Component } from "react";


export default class HistoryCard extends Component {
  render() {


    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Round Summary</h5>
          <p>{this.props.roundScore} </p>
          <p>{this.roundScore}</p>
        </div>

        </div>

    )
  }
}

