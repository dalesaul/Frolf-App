import React, {Component} from 'react';
import disc from "./F_Disc.PNG"
import hist from "./F_histo.png"
import "./home.css"

class Home extends Component {


    render() {
        return (
            <React.Fragment>
            <section className="home">
            <div className="card">
            <div className="card-body home-body">

                <h5 className="card-title">
                    <img src={disc} className="icon--new_Round" alt="New Round Icon"/>
                    Select a Course

                    <button className="btn btn-success"
                        onClick={() => this.props.history.push("/newRound/courseSelect")
                        }
                        >
                        New Round
                        </button>

                </h5>
            </div>
            </div>
            </section>
            <section className="home">
            <div className="card">
            <div className="card-body home-body">
                <h5 className="card-title">
                    <img src={hist} className="icon--round_history" alt="Round History Icon"/>
                    Round History
                    <button className="btn btn-success"
                        onClick={() => this.props.history.push("/roundHistory/userId")
                        }
                        >
                        View Rounds
                        </button>

                </h5>
            </div>
            </div>
            </section>
            </React.Fragment>
        )
    }
}

 export default Home