import React, { Component } from "react";


export default class HistoryCard extends Component {
  render() {


    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Round Summary</h5>
          <h4 className="cScore">{this.props.roundScore} </h4>
         </div>

        </div>

    )
  }
}

