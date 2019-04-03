// import React, { Component } from 'react'
// // import ReactDom from "react-dom"
// // import {Route, withRouter} from "react-router-dom"
// import CourseManager from "../../modules/CourseManager"



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