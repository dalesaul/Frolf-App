const remoteURL = "http://localhost:5002"

export default {
    getAllUserRounds(userId){
        return fetch(`${remoteURL}/rounds/?userId=${userId}&_expand=course`)
        .then(e => e.json())
    },

    deleteRound: id => {
        return fetch(`${remoteURL}/rounds/${id}`, {
           method: "DELETE"
        })
        .then(() => fetch(`${remoteURL}/rounds`))
        .then(e => e.json())
    }
}
