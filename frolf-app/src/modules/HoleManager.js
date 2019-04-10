const remoteURL = "http://localhost:5002"

export default {
    getAllCourseHoles(courseId){
        return fetch(`${remoteURL}/holes/?courseId=${courseId}`)
        .then(e => e.json())
    },

    getAllHoles() {
        return fetch (`${remoteURL}/holes`)
        .then(h => h.json())
    },

    getOne: id => {
        return fetch(`${remoteURL}/holes/?id=${id}`)
        .then(h => h.json())
    },

    put(editedPar) {
        return fetch(`${remoteURL}/holes/${editedPar.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(editedPar)
        }).then(data => data.json());
    }
}