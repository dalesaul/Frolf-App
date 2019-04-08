import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../Authentication/Auth";
import "bootstrap/dist/css/bootstrap.min.css";


class NavBar extends Component {
    signOut = () => {
        auth0Client.signOut();
        sessionStorage.clear()
        this.props.history.replace("/");
    };

    render() {
        console.log("in the render method of navbar",auth0Client.isAuthenticated());
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand" to="/">
            FFrolf
            </Link>
            {!auth0Client.isAuthenticated() ? (
         <button className="btn btn-success" onClick={auth0Client.signIn}>
           Sign In
         </button>
       ) : (
         <React.Fragment>
           <div>
             <label className="mr-2 text-blue">
               {auth0Client.getProfile().name}
             </label>
             <button
               className="btn btn-danger"
               onClick={() => {
                 this.signOut();
               }}
             >
               Sign Out
             </button>
           </div>
           <ul className="nav nav-pills">
           <li className="nav-item">
               <Link className="nav-link" to="/">
                 Welcome
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/home">
                 Home
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/newRound/courseSelect">
                 New Round
               </Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/roundHistory">
                 Round History
               </Link>
             </li>
           </ul>
         </React.Fragment>
       )}
     </nav>

        )
    }
}

export default withRouter(NavBar);
