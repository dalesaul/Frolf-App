import React, { Component } from 'react'

class Course extends Component {
//
// getCourseNames = () => {
// const courses[] = {this.props.courses.name.map((course) =>

// }

    render() {
        return (

                <section className="courses">
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton" data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Select Course</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a key={course.id} className="dropdown-item" href="#">{course[0].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[1].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[2].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[3].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[4].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[5].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[6].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[7].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[8].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[9].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[10].name}</a>
                      <a key={course.id} className="dropdown-item" href="#">{course[11].name}</a>
                      <a className="dropdown-item" href="#">Other</a>

                    </div>
                    </div>
                    </section>
      )
    }
}


export default Course