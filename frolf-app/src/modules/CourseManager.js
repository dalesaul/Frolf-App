const remoteURL = "http://localhost:5002"

export default {
    getAll(){
        return fetch(`${remoteURL}/courses`)
        .then(e => e.json())


    }

}
