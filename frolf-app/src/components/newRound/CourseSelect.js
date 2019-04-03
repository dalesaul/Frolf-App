import React, { Component } from 'react'
import ReactDom from "react-dom"
import {Route, withRouter} from "react-router-dom"
import { DropdownButton, Dropdown } from "react-bootstrap"



class CourseSelect extends Component {

  // state = {

  //     selectedCourse: ""
  //   }
    render () {
        return (

          <React.Fragment>
        <Dropdown>
            <Dropdown.Toggle
            variant="seuccess"
            id="dropdown-basic"
            // value={this.state.selectedCourse}
            // onChange={(e) => this.setState({selectedCourse: e.target.value})}>
            >Select a Course

            </Dropdown.Toggle>
                    <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1" onSelect={this.select}>
                          Barboursville Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2" onClick={this.select}>
                          Beech Fork State Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3" onClick={this.select}>
                          Indian Rock
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-4" onClick={this.select}>
                          Rotary Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-5" onClick={this.select}>
                          Valley Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-6" onClick={this.select}>
                          Armco Park - White Course
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-7" onClick={this.select}>
                          Armco Park - Blue Course
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-8" onClick={this.select}>
                          Eleanor Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-9" onClick={this.select}>
                          St. Albans City Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-10" onClick={this.select}>
                          Wine Cellar
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-11" onClick={this.select}>
                          Little Creek Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-12" onClick={this.select}>
                          Coonskin
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-13" onClick={this.select}>
                          Other
                          </Dropdown.Item>
                          </Dropdown.Menu>
                          </Dropdown>

                          <button className="btn btn-success"
                          onClick={() => this.props.history.push("/roundStart")
                          }>
                          Start Round
                          </button>
                    </React.Fragment>

        )
      }
    }

export default CourseSelect



// // ReactDom.render(<CourseSelect />, document.getElementById('react-search'))










