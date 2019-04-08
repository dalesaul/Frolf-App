const remoteURL = "http://localhost:5002"

export default {
    getAllCourseHoles(courseId){
        return fetch(`${remoteURL}/holes/?courseId=${courseId}`)
        .then(e => e.json())
    }
,
    getAllHoles() {
        return fetch (`${remoteURL}/holes`)
        .then(h => h.json())
    }
}