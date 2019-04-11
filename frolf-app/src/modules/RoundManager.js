const remoteURL = "http://localhost:5002"

export default {
addHoleScoreToRound(newHoleScore) {
    return fetch(`${remoteURL}/shots/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHoleScore)
        }).then(data => data.json());

},

getAll: () => {
    return fetch (`${remoteURL}/rounds/`).then(rounds => rounds.json())
},



getOne: id => {
    return fetch(`${remoteURL}/rounds/${id}`).then(rounds => rounds.json())
},

postRound(newRound) {
    return fetch(`${remoteURL}/rounds`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRound)
        }).then(data => data.json())
},

postRoundScore (id, totalScoreObject) {
      return fetch(`${remoteURL}/rounds/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(totalScoreObject)
        }).then(data => data.json());
    },

getFullRound: roundId => {
        return fetch(`${remoteURL}/shots/?roundId=${roundId}`)
        .then(r => r.json())
    },

deleteRound: id => {
    return fetch(`${remoteURL}/rounds/${id}`, {
        method: "DELETE"
    })
    .then(() => fetch(`${remoteURL}/rounds`))
    .then(e => e.json)

}
}
