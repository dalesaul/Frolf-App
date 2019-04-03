const remoteURL = "http://localhost:5002"

export default {
    getAllCourseHoles(){
        return fetch(`${remoteURL}/holes/?courseId=1`)
        .then(e => e.json())

    }
}