import { BrowserRouter, Route } from 'react-router-dom'
import React, { Component } from "react"
import Auth0Client from "./Authentication/Auth"
import Callback from "./Authentication/Callback"
import CourseManager from '../modules/CourseManager';
import Home from "./Home/home"
import Welcome from "./Welcome/Welcome"
import HistoryManager from '../modules/HistoryManager';
import CourseSelect from "./newRound/CourseSelect"
import RoundStart from "./newRound/RoundStart"
import RoundManager from '../modules/RoundManager';
import HoleDetails from './newRound/HoleDetails';
import HoleManager from '../modules/HoleManager';
import EditPar from "./newRound/EditPar"
import RoundFinish from './roundHistory/RoundFinish';


export default class ApplicationViews extends Component {
    state = {
        welcome: [],
        courses: [],
        rounds: [],
        holes: [],
        roundStart: []

    };


    addNewRound = roundObject =>
    RoundManager.postRound(roundObject)


    updateExistingPar = editedParObject => {
        return HoleManager.put(editedParObject)
    }


componentDidMount(){
    const newState = {}
    return CourseManager.getAll()
    .then(courses => (newState.course = courses))
    .then(welcome => (newState.welcome = welcome))
    .then(home => (newState.home = home))
    .then(courseSelect => (newState.courseSelect = courseSelect))
    .then(HistoryManager.getAllUserRounds)
    .then(roundHistory =>  (newState.roundHistory = roundHistory))
    .then(roundStart => (newState.roundStart = roundStart))
    .then(() => this.setState(newState))
    }



render() {
    return (
        <div className="container-div">
        <BrowserRouter>
         <Route exact path="/" render={(props) => {
                    return <Welcome {...props} welcome={this.state.welcome} />

                }} />

         <Route exact path="/callback" component={Callback} />
         <Route  path="/home" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <Home {...props} home={this.state.home}
                                            courseSelect={this.state.courseSelect} />


                } else {

                    return null;
                  }
                }} />



        <Route exact path="/newRound/courseSelect" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <CourseSelect {...props}
                    courseSelect={this.state.courseSelect}
                    addNewRound={this.addNewRound}


                    />
                } else {

                    return null;
                  }
                }} />

        <Route exact path="/roundStart" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundStart {...props}
                    roundStart={this.state.roundStart}

                    />
                } else {

                    return null;
                  }
                }} />

        <Route path="/roundStart/:roundId(\d+)/:courseId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundStart {...props}
                    roundStart={this.state.roundStart}
                    addNewRound={this.addNewRound}
                    holedetails={this.state.holedetails}
                    holes={this.state.holes}

                    />
                } else {

                    return null;
                  }
                }} />

        <Route path="/:roundId(\d+)/:courseId(\d+)/:holeId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <HoleDetails {...props}
                    holecard={this.state.holecard}
                    holedetails={this.state.holedetails}
                    roundStart={this.state.roundStart}
                    holes={this.state.holes}

                    />
                } else {

                    return null;
                  }
                }} />

<Route path="/editPar/:holeId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <EditPar {...props}
                    roundStart={this.state.roundStart}
                    holeDetails={this.state.holeDetails}

                    />
                } else {

                    return null;
                  }
                }} />


<Route path="/roundHistory/:roundId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundFinish {...props}
                    roundfinish={this.state.roundfinish}
                    courseSelect={this.state.courseSelect}


                    />
                } else {

                    return null;
                  }
                }} />
        </BrowserRouter>
        </div>

    )}
}