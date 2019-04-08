import { BrowserRouter, Route } from 'react-router-dom'
import React, { Component } from "react"
import Auth0Client from "./Authentication/Auth"
import Callback from "./Authentication/Callback"
import CourseManager from '../modules/CourseManager';
import Home from "./Home/home"
import Welcome from "./Welcome/Welcome"
import NewRound from "./newRound/CourseSelect"
// import HoleManager from "../modules/HoleManager"
import RoundHistoryList from "./roundHistory/RoundHistoryList"
import HistoryManager from '../modules/HistoryManager';
import CourseSelect from "./newRound/CourseSelect"
import RoundStart from "./newRound/RoundStart"
import RoundManager from '../modules/RoundManager';
// import HoleDetails from './newRound/HoleDetails';
export default class ApplicationViews extends Component {
    state = {
        welcome: [],
        home: [],
        newRound: [],
        roundHistory: [],
        courses: [],
        rounds: [],
        holes: [],
        roundStart: []

    };


    addNewRound = roundObject =>
    RoundManager.postRound(roundObject)
    .then(roundStart =>
        this.setState ({
            roundStart: roundStart
        }))


componentDidMount(){
    const newState = {}
    return CourseManager.getAll()
    .then(courses => (newState.course = courses))
    .then(welcome => (newState.welcome = welcome))
    .then(home => (newState.home = home))
    .then(courseSelect => (newState.courseSelect = courseSelect))
    .then(newRound => (newState.newRound = newRound))
    // .then(HoleManager.getAllHoles)
    // .then(holes => (newState.holes = holes))
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
         <Route exact path="/home" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <Home {...props} home={this.state.home}
                                            courseSelect={this.state.courseSelect} />
                        // <Course course={this.course}>

                } else {
                    // Auth0Client.signIn();
                    return null;
                  }
                }} />

        <Route exact path="/newRound" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <NewRound {...props}
                    newRound={this.state.newRound}
                    roundStart={this.state.RoundStart}
                    />
                } else {
                    // Auth0Client.signIn();
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
                    // Auth0Client.signIn();
                    return null;
                  }
                }} />

        <Route exact path="/roundStart" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundStart {...props}
                    roundStart={this.state.roundStart}
                    //
                    // holes={this.state.holes}
                    />
                } else {
                    // Auth0Client.signIn();
                    return null;
                  }
                }} />

        <Route path="/roundStart/:courseId(\d+)" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundStart {...props}
                    roundStart={this.state.roundStart}
                    addNewRound={this.addNewRound}

                    // holes={this.state.holes}
                    // rounds={this.state.rounds}

                    />
                } else {
                    // Auth0Client.signIn();
                    return null;
                  }
                }} />

        <Route path="/roundHistory" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundHistoryList {...props} roundHistory={this.state.roundHistory}

                    />
                } else {
                    // Auth0Client.signIn();
                    return null;
                  }
                }} />
        </BrowserRouter>
        </div>

    )}
}