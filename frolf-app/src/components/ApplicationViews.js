import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Auth0Client from "./Authentication/Auth"
import Callback from "./Authentication/Callback"
import CourseManager from '../modules/CourseManager';
import Home from "./Home/home"
import Welcome from "./Welcome/Welcome"
import NewRound from "./newRound/NewRound"
import RoundHistoryList from "./roundHistory/RoundHistoryList"
import HistoryManager from '../modules/HistoryManager';
export default class ApplicationViews extends Component {
    state = {
        welcome: [],
        home: [],
        newRound: [],
        roundHistory: []


    };



componentDidMount(){
    const newState = {}
    return CourseManager.getAll()
//     .then(parsedCourses => () {
//       **write function to be called (parsedCorses)
//          }
    .then(welcome => (newState.welcome = welcome))
    .then(home => (newState.home = home))
    .then(newRound => (newState.newRound = newRound))
    .then(HistoryManager.getAllUserRounds)
    .then(roundHistory =>  (newState.roundHistory = roundHistory))
    .then(() => this.setState(newState))
    }




render() {
    return (
        <div className="container-div">

         <Route exact path="/" render={(props) => {
                    return <Welcome {...props} welcome={this.state.welcome} />

                }} />

         <Route exact path="/callback" component={Callback} />
         <Route exact path="/home" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <Home home={this.state.home} />
                        // <Course course={this.course}>

                } else {
                    Auth0Client.signIn();
                    return null;
                  }
                }} />


        <Route exact path="/newRound" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <NewRound {...props} newRound={this.state.newRound}
                    />
                } else {
                    Auth0Client.signIn();
                    return null;
                  }
                }} />

        {/* <Route path="/newRound/start" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <NewRoundStart {...props} newRoundStart={this.state.newRoundStart}
                    />
                } else {
                    Auth0Client.signIn();
                    return null;
                  }
                }} /> */}

        <Route path="/roundHistory" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                    return <RoundHistoryList {...props} roundHistory={this.state.roundHistory}

                    />
                } else {
                    Auth0Client.signIn();
                    return null;
                  }
                }} />

        </div>
    )}
}