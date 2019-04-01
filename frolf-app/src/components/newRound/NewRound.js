import React, { Component } from 'react'

export default class NewRound extends Component {
    render (){
        return (
            //this will need to be moved to a build round funtion where it maps holes based on courseId and returns the appropriate number of cards with this format
            <section className="nRound">
            <div className="card">
            <div className="card-body">
                    <h5 className="card-title">
                                {/* <img src={dog} className="icon--dog" alt="Dog Icon"/> */}
                    hole 1
                        <button className="btn btn-success">
                                    {/* onClick={() => }>Enter Score */}
                        Enter Score
                        </button>

                    </h5>
            </div>
            </div>
            </section>
        )
    }

}