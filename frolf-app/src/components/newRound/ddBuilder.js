// import React, { Component } from 'react'
// // import ReactDom from "react-dom"
// // import {Route, withRouter} from "react-router-dom"
// import CourseManager from "../../modules/CourseManager"
// import { Dropdown } from "react-bootstrap"



// class CourseSelect extends Component {
// state = {
//   courses: [],
//   selectedCourse: "",
//   validationError: ""
// }

// componentDitMount() {
//     CourseManager.getAll()
//     .then((response) => {
//       return response.json()

//     })

//         .then(data => {
//                 let coursesList = data.array.map(course  => { return {value: course.id, display: course.name} })
//                 this.setState({ courses: [{value: "", display: "(Select a Course)".concat(coursesList)}]
//                    })

//                 .catch(error => {
//                     console.log(error)
//                     console.log(coursesList)
//                 })
//               })

//                 }
//      render () {
//         return (
//                 <React.Fragment>
//                 <div>
//                 <select value={this.state.selectedCourse}
//                 onChange={(e) => this.setState({selectedCourse: e.target.value})}>
//                         {this.state.courses.map((course) =>
//                             <option key={course.value} value={course.value}>{course.display}</option>)}
//                     </select>
//                 </div>
//                 <button className="btn btn-success">
//                 Start Round
//                 </button>
//                 <div style={{color: 'red', marginTop: '5px'}}>
//                     {this.state.validationError}
//                 </div>
//                 </React.Fragment>




// )
// }
// }

// export default CourseSelect;



{/* <Dropdown>
            <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            value={this.state.selectedCourse}
            onChange={(e) => this.setState({selectedCourse: e.target.value})}
            title={this.state.selectedCourse}>
            Select a Course
            </Dropdown.Toggle>
                    <Dropdown.Menu>
                          <Dropdown.Item href="#" onSelect={ this.select}>
                          Barboursville Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Beech Fork State Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Indian Rock
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Rotary Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Valley Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Armco Park - White Course
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Armco Park - Blue Course
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Eleanor Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          St. Albans City Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Wine Cellar
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Little Creek Park
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Coonskin
                          </Dropdown.Item>
                          <Dropdown.Item href="#" onSelect={this.select}>
                          Other
                          </Dropdown.Item>
                          </Dropdown.Menu>
                          </Dropdown> */}