// import React, { Component } from "react";
// import HistoryCard from "./HistoryCard"
// export default class RoundHistoryList extends Component {
//     render () {
//         const round =
//         this.props.rounds.find(
//             r => r.userId === parseInt(this.props.match.params.userId)
//         )
//         return (

//                 <section className="rounds-section">
//                 <div key={round.id} className="card">
//                 {this.props.rounds.map(singleRound => (
//                     <HistoryCard key={singleRound.id} round={singleRound}/>
//                 ))}
//                 </div>
//                 <button
//                 href="#"
//                 className="btn btn-danger"
//                 onClick={() =>
//                   this.props
//                     .deleteRound(round.id)
//                     .then(() => this.props.history.push("/rounds"))
//                 }
//               >
//                 Delete
//               </button>
//               </section>

//                 )
//     }
// }
