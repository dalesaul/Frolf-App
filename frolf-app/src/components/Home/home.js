import React, {Component} from 'react';


// import CourseManager from "../../modules/CourseManager"
// import new_Round from "./new_Round.png"

class Home extends Component {
    // let DDlist = []
    // CourseManager.getAll()
    // .then()

    render() {
        return (
            <React.Fragment>
            <section className="home">
            <div className="card">
            <div className="card-body">

                <h5 className="card-title">
                    {/* <img src={new_Round} className="icon--new_Round" alt="New Round Icon"/> */}
                    New Round (section placeholder Text)




                    <button className="btn btn-success"
                        onClick={() => this.props.history.push("/newRound")
                        }
                        >
                        Start
                        </button>

                </h5>
            </div>
            </div>
            </section>
            <section className="home">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {/* <img src={round_History} className="icon--round_history" alt="Round History Icon"/> */}
                    History (section placeholder text)
                    <button className="btn btn-success"
                        onClick={() => this.props.history.push("/roundHistory")
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