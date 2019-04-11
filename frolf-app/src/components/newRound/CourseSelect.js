import React, { Component } from 'react'
// import RoundManager from "../../modules/RoundManager"





class CourseSelect extends Component {

  state = {
      roundDate: "",
      courseId: "",
      userId: "",
      roundScore: "",
      roundId: ""

    }

    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id]=evt.target.value
      this.setState(stateToChange);
    }

    handleDDchange = evt => {
       const newState = {};
       newState.courseId=evt.target.value
       this.setState(newState)




    }

    constructNewRound = evt => {
      evt.preventDefault();
        const nRound = {
          date: this.state.roundDate,
          userId: parseInt(sessionStorage.getItem("userID")),
          courseId: this.state.courseId,
          roundScore: "0"

        }

        this.props
        .addNewRound(nRound)
        .then(parsedRound => {
          this.props.history.push(`/roundStart/${parsedRound.id}/${this.state.courseId}`)
        }
        )}




    render () {
        return (

          <React.Fragment>
            <form className="roundForm">
              <div className="form-group">
                <label htmlFor="roundDate">Round Date</label>
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="roundDate"

                />
              </div>
              <div className="form-group">
              <label htmlFor="course">Which Course</label>
              <select
                defaultValue=""
                id="courseId"
                onChange={this.handleDDchange}

              >
              <option value="" > Select a Course</option>
              {this.props.courseSelect.map(c => (
                <option key={c.id} value={c.id} id={c.id}>
                {c.name} / {c.holeCount}
                </option>

              ))}
              </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.constructNewRound}
                >
                Start Round
                </button>
            </form>
            </React.Fragment>


        )
      }
    }

export default CourseSelect













