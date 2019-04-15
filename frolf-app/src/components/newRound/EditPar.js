import React, { Component } from "react";
// import { Link } from "react-router-dom";
import HoleManager from "../../modules/HoleManager";



export default class EditPar extends Component {

    state = {
        holeId: "",
        courseId: "",
        holePar: "",
        holeNumber: "",


    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    console.log(stateToChange)};

    updateExistingPar = evt => {
        evt.preventDefault()
        const editedPar = {
            id: this.props.match.params.holeId,
            courseId: parseInt(this.state.courseId),
            number: this.state.holeNumber,
            par: this.state.newHolePar

        };
       (HoleManager.put(editedPar))
            .then(() => this.props.history.goBack())
    };



    componentDidMount() {
        HoleManager.getOne(this.props.match.params.holeId).then(hole => {

            this.setState({
                holeId: hole[0].id,
                courseId: hole[0].courseId,
                holePar: hole[0].par,
                holeNumber: hole[0].number
            })
        })
    }

    render() {

        return(
            <React.Fragment>
                <form className="parForm">
                    <div className="form-group">
                        <label htmlFor="holePar"> Set New Par</label>
                        <input
                            type="number"
                            name="quantity"
                            min="1"
                            max="6"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="holePar"
                            value={this.state.holePar}

                        />
                        <button
                        type="submit"
                        onClick={this.updateExistingPar}
                        className="btn btn-primary"
                        >
                        Submit
                        </button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}

