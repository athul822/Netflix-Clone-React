import "./App.css";
import React from "react";
import LandingMainContent from "./Components/LandingPage/LandingMainContent/LandingMainContent";
import LandingNavBar from "./Components/LandingPage/LandingNavBar/LandingNavBar";
import MainContent from "./Components/MainContent/MainContent";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import RowImages from "./Components/RowImages/RowImages";
import HomePage from "./Pages/HomePage";
import { action, orginals, comedy } from "./Urls";

function App() {
    return (
      <Router >
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          </Switch>
            {/* <LandingNavBar />
      <LandingMainContent /> */}
            {/*Home Page Archive*/}
            {/* <NavBar />
    <MainContent />
    <RowImages url={orginals} title='Netflix Orginals' bigPoster/>
    <RowImages url={action} title='Action' />
    <RowImages url={comedy} title='Comedy' /> */}
      
        </Router>
    );
}

export default App;
