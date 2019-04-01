import React, { Component } from "react";
import HistoryCard from "./HistoryCard"
export default class RoundHistoryList extends Component {
    render () {
        return (

                <section className="rounds-section">
                {this.props.rounds.map(singleRound => (
                    <HistoryCard key={singleRound.id} round={singleRound}/>
                ))}
                </section>
                )
    }
}
